import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { AuthData } from 'src/app/models/auth-data.model';
import { MatDialogRef } from '@angular/material';
import { IdleDialogBoxComponent } from '../session-out/idle-dialog-box/idle-dialog-box.component';
import {
  UserAgencyType,
  UserRole,
  UserSiteType
} from '../../models/pact-enums.enum';
import { UserService } from 'src/app/services/helper-services/user.service';
import { CommonService } from 'src/app/services/helper-services/common.service';
import { environment } from 'src/environments/environment';
import { MyWorklistService } from 'src/app/pact-modules/determination/my-worklist/my-worklist.service';
import { Router } from '@angular/router';
import { PlacementsVerificationService } from 'src/app/pact-modules/vacancyControlSystem/placements-awaiting-verification/placements-verification.service';
import { INavigationItemsOnly, INavigationItemsWithFunctionality, INavigationItems } from '../sidenav-list/navigation.interface';
import { NavigationService } from '../sidenav-list/navigation.service';
import { PactDashboardService } from './pact-dashboard.service';
import { StatsList, AppNotification, ApplicationNotifications, UserStatsInputParams,PACTCAPSHandhakeParams} from './pact-dashboard.model';
import { VCSCoCSiteList } from 'src/app/pact-modules/vacancyControlSystem/coc-referral-queue/coc-referral-queue.model';
import { CoCService } from 'src/app/pact-modules/vacancyControlSystem/coc-referral-queue/coc-referral-queue.service';
import { SiteAdminService } from 'src/app/pact-modules/vacancyControlSystem/agency-site-maintenance/site-admin.service';
import { AgencySiteData, UserAgencyInputParams } from 'src/app/pact-modules/vacancyControlSystem/agency-site-maintenance/agency-site-model';
import { ConfirmDialogService } from 'src/app/shared/confirm-dialog/confirm-dialog.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AuthError } from 'msal/lib-commonjs/error/AuthError';
import { BroadcastService, MsalService } from '@azure/msal-angular';
@Component({
  selector: 'app-pact-dashboard',
  templateUrl: './pact-dashboard.component.html',
  styleUrls: ['./pact-dashboard.component.scss']
})
export class PactDashboardComponent implements OnInit, AfterViewInit, OnDestroy {

  navigatonItems: INavigationItems;
  navigationItemsOnly: INavigationItemsOnly[] = [];  // only Navigation Items, no functionalities
  navigationItemsWithFunctionality: INavigationItemsWithFunctionality[] = []; // Normalize list, will have duplication Navigation items with differrent functionalities
  capsAndApplicationItems: INavigationItemsOnly[] = [];
  vcsItems: INavigationItemsOnly[] = [];
  detItems: INavigationItemsOnly[] = [];
  mlItems: INavigationItemsOnly[] = [];


  newSurveyURL = environment.capsURL + 'Assessment';
  pendingSurveyURL = environment.capsURL + 'PendingAssessment';
  submittedSurveyURL = environment.capsURL + 'SubmittedAssessment';

  isLoading = true;

  navStatusSub: Subscription;
  userStatsSub: Subscription;
  siteListSub: Subscription;
  getHPsitesSub: Subscription;
  appNotificationSub: Subscription;

  userAgencyType = UserAgencyType;
  currentUserAgencyType: UserAgencyType;
  currentUserAgencyTypeSub: Subscription;
  siteList: VCSCoCSiteList[] = [];
  selectedSiteID: number;
  userStats: StatsList[];
  hpAgencySitesData: AgencySiteData[];
  sleepsubscription: Subscription;

  is_SH_RA = false;
  is_SH_PE = false;
  is_SH_HP = false;
  is_CAS = false;
  is_RRH = false;
  is_ML_DHS: boolean = false;
  is_ML_Team: boolean = false;
  is_ML_HP: boolean = false;
  optionUserID=0;
  is_ML_IREA: boolean = false;

  userData: AuthData; /* Current user information */
  userDataSub: Subscription;
  timer: number;
  waitingTime = 90;
  popupDialogRef: MatDialogRef<IdleDialogBoxComponent>;

  dashboardItemsSub: Subscription;

  constructor(
    private userService: UserService,
    private commonService: CommonService,
    private myWorklistService: MyWorklistService,
    private router: Router,
    private placementVerificationService: PlacementsVerificationService,
    private navigationService: NavigationService,
    private dashboardService: PactDashboardService, private confirmDialogService: ConfirmDialogService,
    private cocService: CoCService, private siteAdminservice: SiteAdminService,
    private authService: AuthService,
    private msalAuthService: MsalService, //For MSAL
  ) {

  }

  statSources: StatsList[] = [];

  // App Notifications
  appNotificationData: ApplicationNotifications;
  anouncementList: AppNotification[] = [];
  alertList: AppNotification[] = [];
  popupList: AppNotification[] = [];

  index1 = 0;
  speed1 = 12000;
  infinite1 = true;
  direction1 = 'right';
  directionToggle1 = true;
  autoplay1 = true;
  mouseEnable = true;

  index2 = 0;
  speed2 = 4000;
  infinite2 = true;
  direction2 = 'right';
  directionToggle2 = true;
  autoplay2 = true;

  ngOnInit() {
    /* Getting the CurrentUser Details from UserService */
    this.userDataSub = this.userService.getUserData().subscribe(res => {
      this.userData = res;
      if (this.userData) {
        // console.log('userData: ', this.userData);

        this.is_SH_RA = this.commonService._doesValueExistInJson(this.userData.siteCategoryType, UserSiteType.SH_RA);
        this.is_RRH = this.commonService._doesValueExistInJson(this.userData.siteCategoryType, UserSiteType.RRH_PR);
        this.is_SH_PE = this.commonService._doesValueExistInJson(this.userData.siteCategoryType, UserSiteType.SH_PE);
        this.is_SH_HP = this.commonService._doesValueExistInJson(this.userData.siteCategoryType, UserSiteType.SH_HP);
        this.is_CAS = this.commonService._doesValueExistInJson(this.userData.siteCategoryType, UserSiteType.CAS);        
        this.is_ML_DHS = this.commonService._doesValueExistInJson(this.userData.siteCategoryType, UserSiteType.ML_DHS_Liaison);
        this.is_ML_Team = this.commonService._doesValueExistInJson(this.userData.siteCategoryType, UserSiteType.ML_Team);
        this.is_ML_HP = this.commonService._doesValueExistInJson(this.userData.siteCategoryType, UserSiteType.ML_HP);
        this.is_ML_IREA = this.commonService._doesValueExistInJson(this.userData.siteCategoryType, UserSiteType.ML_IREA);
        this.optionUserID = this.userData.optionUserId;

        /* Get the Dashboard Items for the current User from the NavigationService */
        this.dashboardItemsSub = this.navigationService.getNavigationItems().subscribe((res: INavigationItems) => {
          if (res) {
            this.navigatonItems = res;
            this.navigationItemsOnly = res.navigationItemsOnly;
            this.navigationItemsWithFunctionality = res.navigationItemsWithFunctionality;
            this.capsAndApplicationItems = this.navigationItemsOnly.filter(d => (d.systemModuleType === 766 || d.systemModuleType === 807) && d.isDashboardItem == true);
            if (this.is_CAS) {
              this.vcsItems = this.navigationItemsOnly.filter(d => d.systemModuleType === 765 && d.isDashboardItem == true && (d.navigationItemID == 14 || d.navigationItemID == 16 || d.navigationItemID == 17 || d.navigationItemID == 18 || d.navigationItemID == 19 || d.navigationItemID == 21));
            } else if (this.is_SH_HP || this.is_RRH) {
              this.vcsItems = this.navigationItemsOnly.filter(d => d.systemModuleType === 765 && d.isDashboardItem == true && (d.navigationItemID == 14 || d.navigationItemID == 16 || d.navigationItemID == 17 || d.navigationItemID == 20 || d.navigationItemID == 38 || d.navigationItemID == 73));
            } else if (this.is_SH_PE) {
              this.vcsItems = this.navigationItemsOnly.filter(d => d.systemModuleType === 765 && d.isDashboardItem == true && (d.navigationItemID == 14|| d.navigationItemID == 10 || d.navigationItemID == 11 || d.navigationItemID == 13 || d.navigationItemID == 16 || d.navigationItemID == 17 || d.navigationItemID == 38 || d.navigationItemID == 40 || d.navigationItemID == 41 || d.navigationItemID == 73));
            }

            this.detItems = this.navigationItemsOnly.filter(d => d.systemModuleType === 767 && d.isDashboardItem == true);
            this.mlItems = this.navigationItemsOnly.filter(d => d.systemModuleType === 974 && d.isDashboardItem == true);

            // console.log('capsAndApplicationItems: ', this.capsAndApplicationItems);
          }
        });


        if (this.is_SH_RA || this.is_SH_HP) {
          try {
          this.siteListSub = this.cocService.getUserSite(this.userData.optionUserId).subscribe(res => {
            this.siteList = res as VCSCoCSiteList[];
            this.selectedSiteID = this.siteList[0].siteID;
            this.getUserStats(this.selectedSiteID);
          });
        }
        catch (error) {
          console.log('Error Dashboard: ' + error);
        }
        }
        if (this.is_SH_PE || this.is_CAS) {
          this.selectedSiteID = 0;
          this.getUserStats(this.selectedSiteID);
        }
      }
    });

    /* Getting the currentUserAgencyType from UserService */
    this.currentUserAgencyTypeSub = this.userService
      .getCurrentUserAgencyType()
      .subscribe((usrAgncyType: UserAgencyType) => {
        this.currentUserAgencyType = usrAgncyType;
        // console.log('dashboard current userAgencyType: ' + this.currentUserAgencyType);
      });

    setTimeout(() => {
      this.showPopupHousingProgramTotalBedCountIncomplete(); // if User has Role HP Site-SysAdmin
    }, 1000);

    /* Getting the App Notifications (Alert, PopUp, Announcements) */
    this.appNotificationSub = this.dashboardService.getAppNotification().subscribe(res => {
      if (res) {
        this.appNotificationData = res as ApplicationNotifications;
        // console.log('dashboard appNotification: ', this.appNotificationData);
        this.anouncementList = this.appNotificationData.appAnnouncement;
        this.alertList = this.appNotificationData.appAlert;
        this.popupList = this.appNotificationData.appPopup;

        // console.log('appNotification:', this.appNotificationData);
      }
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.popupList.length > 0) {
        // console.log('popuplist.length: ', this.popupList.length);
        // console.log('ngAfterViewInit: ')
        this.showNotificationPopup(this.popupList[0]);
      }
    }, 1000);
  }

  showNotificationPopup(notificationPopup: AppNotification) {
    if (notificationPopup) {
      const title = notificationPopup.notificationTitle;
      // const primaryMessage = notificationPopup.notificationMessage;
      const primaryMessage = '';
      const secondaryMessage = notificationPopup.notificationLongMessage;
      const confirmButtonName = 'OK';
      const dismissButtonName = '';

      this.confirmDialogService.confirmDialog(title, primaryMessage, secondaryMessage, confirmButtonName, dismissButtonName).then(
        positiveResponse => {
          if (notificationPopup.isPopupDisplayOnce) {
            const appNotificationSaveUser = new AppNotification();
            appNotificationSaveUser.appNotificationID = notificationPopup.appNotificationID;
            appNotificationSaveUser.userID = this.optionUserID;
            if (this.is_SH_RA || this.is_SH_PE || this.is_SH_HP || this.is_CAS) {
              // User has access to SH only
              appNotificationSaveUser.ModuleType = 'SH';
            } else if (this.is_ML_DHS || this.is_ML_Team || this.is_ML_HP || this.is_ML_IREA) {
              // User has access to ML only
              appNotificationSaveUser.ModuleType = 'ML';
            }
            appNotificationSaveUser.isPopup = true;
            this.appNotificationSub = this.dashboardService.saveAppNotificationUser(appNotificationSaveUser).subscribe(res => {
              this.appNotificationData = res as ApplicationNotifications;
              this.anouncementList = this.appNotificationData.appAnnouncement;
              this.alertList = this.appNotificationData.appAlert;
              this.popupList = this.appNotificationData.appPopup;
            });
          }
        },
        negativeResponse => { }
      );
    }

  }

  //For Proxy Migration to enable handshake between PACT and CAPS
  pactCAPSHandshake(LanId:string,Target:number) {
    const data = new PACTCAPSHandhakeParams();
    data.lanId = LanId;
    data.target = Target;
    this.dashboardService.savePactCAPSHandshake(data).subscribe(res => {
      // console.log('PACTCAPSHandshake: ', res);
    });
  }

  // get User stats for selected site
  getUserStats(siteID: number) {
    try
    {
    if(this.userData.optionUserId > 0 && siteID >= 0) {
      const userStatsInputParams = new UserStatsInputParams();
      userStatsInputParams.optionUserId = this.userData.optionUserId;
      userStatsInputParams.siteID = siteID;

      this.userStatsSub = this.dashboardService.getUserStats(userStatsInputParams)
      .subscribe(
        {
        next:
        res => {
        this.statSources = res as StatsList[];
      },
       error :(err: AuthError) => {
        this.msalAuthService.acquireTokenPopup({
          scopes: this.msalAuthService.getScopesForEndpoint(environment.pactAdApiUrl)
        })
        .then(() => {
          this.dashboardService.getUserStats(userStatsInputParams)
            .toPromise()
            .then(res => {
              this.statSources = res as StatsList[];
            });
        })
        .catch(error => {
          console.error('Token acquisition failed', error);
          // Optionally, you can redirect the user to the login page
          this.msalAuthService.loginRedirect();
        });

    }
      });
    }
  }
  catch (error) { console.log('Error Dashboard: getUserStats' + error); }
  }

  //On Site DropDown change
  onSiteSelected(event) {
    this.getUserStats(this.selectedSiteID);
  };
  //On Site DropDown click
  onSiteBlur() {
    this.autoplay1 = true;
  }
  //On Site DropDown blur
  onClick(event) {
    this.autoplay1 = false;
  }

  //On Worklist Pending Selected
  onMyWorklistPendingSelected() {
    this.myWorklistService.setTabIndex(0);
  }

  //On Worklist FollowUp Selected
  onMyWorklistFollowUpSelected() {
    this.myWorklistService.setTabIndex(1);
  }

  //On Worklist Completed Selected
  onMyWorklistCompletedSelected() {
    this.myWorklistService.setTabIndex(2);
  }

  onNewSurvey() {
    this.pactCAPSHandshake(this.userData.lanId, 1);
    //window.location.href = this.newSurveyURL;
    this.sleepsubscription = timer(2000).subscribe(() => {
      window.location.href = environment.capsURL;
    }
  );
    
  
  }

  onPendingSurvey() {
    this.pactCAPSHandshake(this.userData.lanId, 2);
    //window.location.href = this.pendingSurveyURL;
    //window.location.href = environment.capsURL;
    this.sleepsubscription = timer(2000).subscribe(() => {
      window.location.href = environment.capsURL;
    }
  );
  }

  onSubmittedSurvey() {
    this.pactCAPSHandshake(this.userData.lanId, 3);
    //window.location.href = this.submittedSurveyURL;
    //window.location.href = environment.capsURL;
    this.sleepsubscription = timer(2000).subscribe(() => {
      window.location.href = environment.capsURL;
    }
  );
  }

  // onClientPlacementsClick() {
  //   this.placementVerificationService.setIsClientPlacements(true);
  //   this.router.navigate(['/vcs/placement-history-client-search']);
  // }

  onNavigationItemClick(item: INavigationItemsOnly) {
    
    if (item.navigationItemID == 1 || item.navigationItemID == 2 || item.navigationItemID == 3) {
      this.pactCAPSHandshake(this.userData.lanId, item.navigationItemID);
      // window.location.href = environment.capsURL + "?Target=" + item.navigationItemID;
      var isJuniperUser = false;
      this.authService.getIsJuniperUserFlag().subscribe(flag => {
        isJuniperUser = flag;
      });
      // window.location.href = environment.capsURL;
    // window.location.href = environment.capsURL + "?isJuniperUser=" + isJuniperUser + "&Target=" + item.navigationItemID;
      this.sleepsubscription = timer(2000).subscribe(() => {
        window.location.href = environment.capsURL + "?isJuniperUser=" + isJuniperUser + "&Target=" + item.navigationItemID;
      }
    );
   
   
    } else if (item.navigationItemID == 19) {
      // ClientPlacementsClick
      this.placementVerificationService.setIsClientPlacements(true);
      this.router.navigate([item.url]);
    } else {
      this.router.navigate([item.url]);
    }
   
  }

  showPopupHousingProgramTotalBedCountIncomplete() {
    let that = this;
    const title = 'Unit Roster Alert !!!';
    const primaryMessage = 'Unit Roster for your Site Profile is Incomplete.';
    const secondaryMessage = 'Please click ‘OK’ to complete Unit Roster for receiving referrals (OR) click ‘EXIT’ to continue.';
    const confirmButtonName = 'OK';
    const dismissButtonName = 'EXIT';

    if ((this.is_SH_HP === true) && (this.userData.roleId === 4) && this.userData.siteCategoryType
      && (this.userData.siteCategoryType.length === 1) && (this.userData.siteCategoryType.findIndex(it => it.siteCategory == 7) === 0)) {

      const inputParams = new UserAgencyInputParams();
      inputParams.agencyID = that.userData.agencyId;
      inputParams.optionUserID = that.userData.optionUserId;

      that.getHPsitesSub = that.dashboardService.getHPsitesForIncompleteUnits(inputParams).subscribe(res => {

        that.hpAgencySitesData = res as AgencySiteData[];
        if (that.hpAgencySitesData && that.hpAgencySitesData.length > 0) {

          that.confirmDialogService.confirmDialog(title, primaryMessage, secondaryMessage, confirmButtonName, dismissButtonName)
            .then(
              (positiveResponse) => {
                that.siteAdminservice.setSiteSelected(that.hpAgencySitesData[0]);
                that.router.navigate(['/admin/site-profile'], { queryParams: { "tabSelectedIndex": 2 } });
              },
              (negativeResponse) => {
                //console.log('EXIT button clicked.');
              },
            );

        } else {
          // console.log('NO HP-Sites found with Unit Bed Count ZERO. optionUserId = ' + that.userData.optionUserId);
        }

      });

    }

  }

  ngOnDestroy() {
    if (this.currentUserAgencyTypeSub) {
      this.currentUserAgencyTypeSub.unsubscribe();
    }
    if (this.dashboardItemsSub) {
      this.dashboardItemsSub.unsubscribe();
    }
    if (this.userStatsSub) {
      this.userStatsSub.unsubscribe();
    }
    if (this.siteListSub) {
      this.siteListSub.unsubscribe();
    }
    if (this.getHPsitesSub) {
      this.getHPsitesSub.unsubscribe();
    }
    if (this.appNotificationSub) {
      this.appNotificationSub.unsubscribe();
    }
    if(this.sleepsubscription){
      this.sleepsubscription.unsubscribe();
    }
  }

}
