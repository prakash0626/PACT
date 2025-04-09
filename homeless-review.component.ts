import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { AuthData } from 'src/app/models/auth-data.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

//Child Components
import { HomelessHistoryComponent } from 'src/app/shared/homeless-history/homeless-history.component';
import { HomelessOneFourYearsComponent } from './homeless-one-four-years/homeless-one-four-years.component';
import { ResidentialTreatmentHistoryComponent } from './residential-treatment-history/residential-treatment-history.component';
import { HomelessAtRiskComponent } from './homeless-at-risk/homeless-at-risk.component';

//Service
import { UserService } from 'src/app/services/helper-services/user.service';
import { ApplicationDeterminationService } from 'src/app/services/helper-services/application-determination.service';
import { CommonService } from 'src/app/services/helper-services/common.service';
import { DeterminationSideNavService } from 'src/app/core/sidenav-list/determination-sidenav-list/determination-sidenav-list.service';
import { HomelesReviewService } from './homeless-review.service';

//Models
import { iApplicationDeterminationData } from 'src/app/models/application-determination.model'
import { iHousingDeterminationDocumentsData } from 'src/app/models/determination-documents.model';
import { DETTabTimeDuration } from 'src/app/models/determination-common.model';

@Component({
  selector: 'app-homeless-review',
  templateUrl: './homeless-review.component.html',
  styleUrls: ['./homeless-review.component.scss']
})

export class HomelessReviewComponent implements OnInit, OnDestroy {
  @ViewChild(HomelessHistoryComponent) homelessChild: HomelessHistoryComponent;
  @ViewChild(HomelessOneFourYearsComponent) homelessOneFourYearsChild: HomelessOneFourYearsComponent;
  @ViewChild(ResidentialTreatmentHistoryComponent) residentialTreatmentHistoryChild: ResidentialTreatmentHistoryComponent;
  @ViewChild(HomelessAtRiskComponent) homelessAtRiskChild: HomelessAtRiskComponent;

  //Global Varaibles
  tabSelectedIndex: number = 0;
  currentTabIndex: number = 0;
  clientCategory: number = 0;
  pactApplicationId: number = 0;
  homelessPath: number = 0;

  userData: AuthData;
  userDataSub: Subscription;
  activatedRouteSub: Subscription;
  applicationDeterminationDataSub: Subscription;
  applicationDeterminationData: iApplicationDeterminationData;

  housingDeterminationDocumentsData: iHousingDeterminationDocumentsData = {
    pactApplicationId: null,
    documentType: []
  };

  detTabTimeDuration: DETTabTimeDuration = {
    pactApplicationId: null,
    tabInName: null,
    tabOutName: null,
    optionUserId: null
  };

  isHomeless1To4YearsTabEnabled: boolean = false;
  isResidentialTreatmentTabEnabled: boolean = false;
  isHomelessAtRiskTabEnabled: boolean = false;
  isHomelessSummaryTabEnabled: boolean = false;
  isHomelessReportTabEnabled: boolean = false;
  isAtRiskTabEligible: boolean = false;

  //Constructor
  constructor(private route: ActivatedRoute,
    private userService: UserService,
    private applicationDeterminationService: ApplicationDeterminationService,
    private commonService: CommonService,
    private router: Router,
    private message: ToastrService,
    private determinationSideNavService: DeterminationSideNavService,
    private homelesReviewService: HomelesReviewService) {
  }

  ngOnInit() {
    //Side Navigation Service For Determination
    this.activatedRouteSub = this.route.paramMap.subscribe(param => {
      if (param) {
        const paramApplicationId = param.get('applicationId');
        if (paramApplicationId) {
          const numericApplicationId = parseInt(paramApplicationId);
          if (isNaN(numericApplicationId)) {
            throw new Error("Invalid application number!");
          } else if (numericApplicationId > 0 && numericApplicationId < 2147483647) {
            this.applicationDeterminationService.setApplicationIdForDetermination(numericApplicationId);
            //Get User Data
            this.userDataSub = this.userService.getUserData().subscribe(res => {
              if (res) {
                this.userData = res;
                //Getting the application details for determination from ApplicationDeterminationService
                this.applicationDeterminationDataSub = this.applicationDeterminationService.getApplicationDeterminationData()
                  .subscribe(res => {
                    if (res) {
                      const data = res as iApplicationDeterminationData;
                      if (data) {
                        this.commonService.validateDetermination(data.caseAssignedTo, data.caseStatusType, this.userData.optionUserId);
                        this.applicationDeterminationData = data;
                        if (this.applicationDeterminationData) {
                          if (this.applicationDeterminationData.clientCategoryType) {
                            this.clientCategory = this.applicationDeterminationData.clientCategoryType;
                          }
                          if (this.applicationDeterminationData.pactApplicationId) {
                            this.pactApplicationId = this.applicationDeterminationData.pactApplicationId;
                            this.housingDeterminationDocumentsData.pactApplicationId = this.applicationDeterminationData.pactApplicationId;
                            this.housingDeterminationDocumentsData.documentType[0] = 55;
                            this.saveTabTimeDuration(this.applicationDeterminationData.pactApplicationId, null, "HousingHomeless", this.userData.optionUserId);
                          }
                          //Set Tab Status
                          this.isHomeless1To4YearsTabEnabled = this.applicationDeterminationData.isHomeless1To4YearsTabCompleted;
                          this.isResidentialTreatmentTabEnabled = this.applicationDeterminationData.isResidentialTreatmentAndInstitutionalHistoryTabCompleted;
                          if (this.clientCategory === 673 || this.clientCategory === 674) {
                            this.isHomelessAtRiskTabEnabled = this.applicationDeterminationData.isHomelessAtRiskTabCompleted;
                          }
                          this.isHomelessSummaryTabEnabled = this.applicationDeterminationData.isHomelessSummaryTabCompleted;
                          this.isHomelessReportTabEnabled = this.applicationDeterminationData.isHousingHomelessReportTabCompleted;
                          this.determinationSideNavService.enablePendingReview(this.applicationDeterminationData);
                          this.determinationSideNavService.setIsHomelessReviewDisabled(false);
                        }
                      }
                    }
                  });
              }
            });
          }
          else {
            return;
          }
        }
      }
    });

    //Get Homeless 1 to 4 Years Tab Enabled
    this.homelesReviewService.getHomeless1To4YearsTabEnabled().subscribe(res => {
      this.isHomeless1To4YearsTabEnabled = res;
    });
    //Get Residential Treatment Tab Enabled
    this.homelesReviewService.getResidentialTreatmentTabEnabled().subscribe(res => {
      this.isResidentialTreatmentTabEnabled = res;
    });
    //Get Homeless At Risk Tab Enabled
    this.homelesReviewService.getHomelessAtRiskTabEnabled().subscribe(res => {
      this.isHomelessAtRiskTabEnabled = res;
    });
    //Get Homeless Summary Tab Enabled
    this.homelesReviewService.getHomelessSummaryTabEnabled().subscribe(res => {
      this.isHomelessSummaryTabEnabled = res;
    });
    //Get Homeless Report Tab Enabled
    this.homelesReviewService.getHomelessReportTabEnabled().subscribe(res => {
      this.isHomelessReportTabEnabled = res;
    });
    //Get Homeless Report Tab Enabled
    this.homelesReviewService.getAtRiskTabEligible().subscribe(res => {
      this.isAtRiskTabEligible = res;
    });
  }

  //Destroy 
  ngOnDestroy() {
    if (this.userDataSub) {
      this.userDataSub.unsubscribe();
    }
    if (this.activatedRouteSub) {
      this.activatedRouteSub.unsubscribe();
    }
    if (this.applicationDeterminationDataSub) {
      this.setTabTimeDuration();
      this.applicationDeterminationDataSub.unsubscribe();
    }
  }

  //Set Tab Values For Tab Time Duration
  setTabTimeDuration() {
    let tabOutName: string;
    let tabInName: string;
    if (this.clientCategory === 673 || this.clientCategory === 674) {
      //Current Tab Index && TabOutName
      if (this.currentTabIndex === 0) {
        tabOutName = "HousingHomeless"
      }
      else if (this.currentTabIndex === 1) {
        tabOutName = "Homeless1To4Years";
        if (this.homelessOneFourYearsChild && this.homelessOneFourYearsChild.validateHomless1To4Years(this.clientCategory)) {
          this.homelessOneFourYearsChild.saveHomeless1To4YearDetails(4);
        }
        else {
          this.tabSelectedIndex = 1;
          return;
        }
      }
      else if (this.currentTabIndex === 2) {
        tabOutName = "ResidentialTreatment";
        if (this.residentialTreatmentHistoryChild.validateResidentialTreatmentHistory(this.clientCategory)) {
          this.residentialTreatmentHistoryChild.saveResidentialTreatmentHistoryDetails(4);
        }
        else {
          this.tabSelectedIndex = 2;
          return;
        }
      }
      else if (this.currentTabIndex === 3) {
        tabOutName = "HomelessAtRisk";
        if (this.homelessAtRiskChild.validateHomelessAtRisk()) {
          this.homelessAtRiskChild.saveHomelessAtRiskDetails(4);
        }
        else {
          this.tabSelectedIndex = 3;
          return;
        }
      }
      else if (this.currentTabIndex === 4) {
        tabOutName = "HomelessSummary";
      }
      else if (this.currentTabIndex === 5) {
        tabOutName = "HousingHomelessReport";
      }
      //Selected Tab Index && TabInName
      if (this.tabSelectedIndex === 0) {
        tabInName = "HousingHomeless";
        this.currentTabIndex = this.tabSelectedIndex;
      }
      else if (this.tabSelectedIndex === 1) {
        tabInName = "Homeless1To4Years";
        this.currentTabIndex = this.tabSelectedIndex;
      }
      else if (this.tabSelectedIndex === 2) {
        tabInName = "ResidentialTreatment";
        this.currentTabIndex = this.tabSelectedIndex;
      }
      else if (this.tabSelectedIndex === 3) {
        tabInName = "HomelessAtRisk";
        this.currentTabIndex = this.tabSelectedIndex;
      }
      else if (this.tabSelectedIndex === 4) {
        tabInName = "HomelessSummary";
        this.currentTabIndex = this.tabSelectedIndex;
      }
      else if (this.tabSelectedIndex === 5) {
        tabInName = "HousingHomelessReport";
        this.currentTabIndex = this.tabSelectedIndex;
      }
    }
    else if (this.clientCategory === 675) {
      //Current Tab Index && TabOutName
      if (this.currentTabIndex === 0) {
        tabOutName = "HousingHomeless"
      }
      else if (this.currentTabIndex === 1) {
        tabOutName = "Homeless1To4Years";
        if (this.homelessOneFourYearsChild.validateHomless1To4Years(this.clientCategory)) {
          this.homelessOneFourYearsChild.saveHomeless1To4YearDetails(4);
        }
        else {
          this.tabSelectedIndex = 1;
          return;
        }
      }
      else if (this.currentTabIndex === 2) {
        tabOutName = "HomelessSummary";
      }
      else if (this.currentTabIndex === 3) {
        tabOutName = "HousingHomelessReport";
      }
      //Selected Tab Index && TabInName
      if (this.tabSelectedIndex === 0) {
        tabInName = "HousingHomeless";
        this.currentTabIndex = this.tabSelectedIndex;
      }
      else if (this.tabSelectedIndex === 1) {
        tabInName = "Homeless1To4Years";
        this.currentTabIndex = this.tabSelectedIndex;
      }
      else if (this.tabSelectedIndex === 2) {
        tabInName = "HomelessSummary";
        this.currentTabIndex = this.tabSelectedIndex;
      }
      else if (this.tabSelectedIndex === 3) {
        tabInName = "HousingHomelessReport";
        this.currentTabIndex = this.tabSelectedIndex;
      }
    }
    else if (this.clientCategory === 671 || this.clientCategory === 672 || this.clientCategory === 676) {
      //Current Tab Index && TabOutName
      if (this.currentTabIndex === 0) {
        tabOutName = "HousingHomeless"
      }
      else if (this.currentTabIndex === 1) {
        tabOutName = "Homeless1To4Years";
        if (this.homelessOneFourYearsChild.validateHomless1To4Years(this.clientCategory)) {
          this.homelessOneFourYearsChild.saveHomeless1To4YearDetails(4);
        }
        else {
          this.tabSelectedIndex = 1;
          return;
        }
      }
      else if (this.currentTabIndex === 2) {
        tabOutName = "ResidentialTreatment";
        if (this.residentialTreatmentHistoryChild.validateResidentialTreatmentHistory(this.clientCategory)) {
          this.residentialTreatmentHistoryChild.saveResidentialTreatmentHistoryDetails(4);
        }
        else {
          this.tabSelectedIndex = 2;
          return;
        }
      }
      else if (this.currentTabIndex === 3) {
        tabOutName = "HomelessSummary";
      }
      else if (this.currentTabIndex === 4) {
        tabOutName = "HousingHomelessReport";
      }
      //Selected Tab Index && TabInName
      if (this.tabSelectedIndex === 0) {
        tabInName = "HousingHomeless";
        this.currentTabIndex = this.tabSelectedIndex;
      }
      else if (this.tabSelectedIndex === 1) {
        tabInName = "Homeless1To4Years";
        this.currentTabIndex = this.tabSelectedIndex;
      }
      else if (this.tabSelectedIndex === 2) {
        tabInName = "ResidentialTreatment";
        this.currentTabIndex = this.tabSelectedIndex;
      }
      else if (this.tabSelectedIndex === 3) {
        tabInName = "HomelessSummary";
        this.currentTabIndex = this.tabSelectedIndex;
      }
      else if (this.tabSelectedIndex === 4) {
        tabInName = "HousingHomelessReport";
        this.currentTabIndex = this.tabSelectedIndex;
      }
    }
    if (this.applicationDeterminationData && this.applicationDeterminationData.pactApplicationId) {
      this.saveTabTimeDuration(this.applicationDeterminationData.pactApplicationId, tabOutName, tabInName, this.userData.optionUserId);
    }
  }

  //Save Tab Time Duration
  saveTabTimeDuration(pactApplicationId: number, tabOutName: string, tabInName: string, optionUserId: number) {
    this.detTabTimeDuration.pactApplicationId = pactApplicationId;
    this.detTabTimeDuration.tabOutName = tabOutName;
    this.detTabTimeDuration.tabInName = tabInName;
    this.detTabTimeDuration.optionUserId = optionUserId;
    this.commonService.saveTabTimeDuration(this.detTabTimeDuration).subscribe();
  }

  //Homeless Review Tab Change Event
  homelessReviewTabChange() {
    this.setTabTimeDuration();
  }

  //Is Cth Changed
  isCthChanged() {
    this.isHomeless1To4YearsTabEnabled = false;
    this.isResidentialTreatmentTabEnabled = false;
    this.isHomelessAtRiskTabEnabled = false;
    this.isHomelessSummaryTabEnabled = false;
    this.isHomelessReportTabEnabled = false;
    this.determinationSideNavService.setIsMedicaidPrioritizationDisabled(true);
    this.determinationSideNavService.setIsVulnerabilityAssessmentDisabled(true);
    this.determinationSideNavService.setIsDeterminationSummaryDisabled(true);
    this.determinationSideNavService.setIsSignOffFollowUpDisabled(true);
  }

  //Next Housing Homeless Button Click
  nextHousingHomelessTab() {
    if (this.homelessChild.isCTHCompleted) {
      this.isHomeless1To4YearsTabEnabled = true;
      this.tabSelectedIndex = this.tabSelectedIndex + 1;
    }
    else {
      if (!this.message.currentlyActive) {
        this.message.error("CTH is required.");
      }
    }
  }

  //Previous Housng Homeless Button Click
  previousHousingHomelessTab() {
    if (this.applicationDeterminationData && this.applicationDeterminationData.pactApplicationId) {
      this.router.navigate(['/ds/clinical-review', this.applicationDeterminationData.pactApplicationId]);
    }
  }

  //Next Homeless 1-4 Years Button Click
  nextHomeless1To4YearsTab() {
    if (this.clientCategory === 675) {
      this.isHomelessSummaryTabEnabled = true;
    }
    else {
      this.isResidentialTreatmentTabEnabled = true;
    }
    this.tabSelectedIndex = this.tabSelectedIndex + 1;
  }

  //Previous Homeless 1-4 Years Button Click
  previousHomeless1To4YearsTab() {
    this.tabSelectedIndex = this.tabSelectedIndex - 1;
  }

  //Next Residential History Button Click 
  nextResidentialTreatmentHistoryTab() {
    if (this.clientCategory === 673 || this.clientCategory === 674) {
      if (this.isAtRiskTabEligible) {
        this.isHomelessAtRiskTabEnabled = true;
        this.tabSelectedIndex = this.tabSelectedIndex + 1;
      }
      else {
        this.isHomelessSummaryTabEnabled = true;
        this.tabSelectedIndex = this.tabSelectedIndex + 2;
      }
    }
    else {
      this.isHomelessSummaryTabEnabled = true;
      this.tabSelectedIndex = this.tabSelectedIndex + 1;
    }
  }

  //Previous Residential Treatment History Button Click
  previousResidentialTreatmentHistoryTab() {
    this.tabSelectedIndex = this.tabSelectedIndex - 1;
  }

  //Next Homeless At Risk Button Click 
  nextHomelessAtRiskTab() {
    this.isHomelessSummaryTabEnabled = true;
    this.tabSelectedIndex = this.tabSelectedIndex + 1;
  }

  //Previous Homeless At Risk Button Click
  previousHomelessAtRiskTab() {
    this.tabSelectedIndex = this.tabSelectedIndex - 1;
  }

  //Next Homeless Summary Button Click 
  nextHomelessSummaryTab(data: number) {
    if (data) {
      this.homelessPath = data;
      if (this.homelessPath === 1) {
        this.determinationSideNavService.setIsDeterminationSummaryDisabled(false);
        this.router.navigate(['/ds/determination-summary', this.pactApplicationId]);
      }
      else {
        this.isHomelessReportTabEnabled = true;
        this.tabSelectedIndex = this.tabSelectedIndex + 1;
      }
    }
  }

  //Previous Homeless Summary Button Click
  previousHomelessSummaryTab() {
    if (this.clientCategory === 673 || this.clientCategory === 674) {
      if (this.isAtRiskTabEligible) {
        this.tabSelectedIndex = this.tabSelectedIndex - 1;
      }
      else {
        this.tabSelectedIndex = this.tabSelectedIndex - 2;
      }
    }
    else {
      this.tabSelectedIndex = this.tabSelectedIndex - 1;
    }
  }

  //Next Homeless Report Button Click 
  nextHomelessReportTab() {
    if (this.homelessPath) {
      if (this.homelessPath === 2) {
        this.determinationSideNavService.setIsMedicaidPrioritizationDisabled(false);
        if (this.applicationDeterminationData && this.applicationDeterminationData.pactApplicationId) {
          this.router.navigate(['/ds/medicaid-prioritization', this.applicationDeterminationData.pactApplicationId]);
        }
      }
      else if (this.homelessPath === 3) {
        this.determinationSideNavService.setIsVulnerabilityAssessmentDisabled(false);
        if (this.applicationDeterminationData && this.applicationDeterminationData.pactApplicationId) {
          this.router.navigate(['/ds/vulnerability-assessment', this.applicationDeterminationData.pactApplicationId]);
        }
      }
    }
    else {
      if (this.applicationDeterminationData && this.applicationDeterminationData.pactApplicationId) {
        if (this.applicationDeterminationData.isMedicaidPrioritizationTabCompleted) {
          this.router.navigate(['/ds/medicaid-prioritization', this.applicationDeterminationData.pactApplicationId]);
        }
        else if (this.applicationDeterminationData.isVulnerabilityAssessmentTabCompleted) {
          this.router.navigate(['/ds/vulnerability-assessment', this.applicationDeterminationData.pactApplicationId]);
        }
        else if (this.applicationDeterminationData.isDeterminationSummaryTabCompleted) {
          this.router.navigate(['/ds/determination-summary', this.applicationDeterminationData.pactApplicationId]);
        }
        else if (this.applicationDeterminationData.isSignOffTabCompleted) {
          this.router.navigate(['/ds/sign-off-follow-up', this.applicationDeterminationData.pactApplicationId]);
        }
      }
    }
  }

  //Previous Homeless Report Button Click
  previousHomelessReportTab() {
    this.tabSelectedIndex = this.tabSelectedIndex - 1;
  }
}
