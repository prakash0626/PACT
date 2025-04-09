import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ErrorsModule } from 'src/app/shared/errors-handling/errors.module';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';
import { ToastrModule } from 'ngx-toastr';
import { DeterminationRoutingModule } from './determination-routing.module';
import { ContentBannerModule } from '../../shared/content-banner/content-banner.module';
import { NgxMaskModule } from 'ngx-mask';
import { TextMaskModule } from 'angular2-text-mask';
import { ConfirmDialogModule } from 'src/app/shared/confirm-dialog/confirm-dialog.module';
import { NavFooterModule } from 'src/app/shared/nav-footer/nav-footer.module';
import { HomelessReviewComponent } from './homeless-review/homeless-review.component';
import { CaseAssignmentModule } from '../determination/case-assignment/case-assignment.module'
import { CaseAssignmentComponent } from './case-assignment/case-assignment.component';
import { CaseAssignmentDialogComponent } from './case-assignment/case-assignment-dialog/case-assignment-dialog.component';
import { ClinicalReviewComponent } from './clinical-review/clinical-review.component';
import { MedicaidPrioritizationComponent } from './medicaid-prioritization/medicaid-prioritization.component';
import { VulnerabilityAssessmentComponent } from './vulnerability-assessment/vulnerability-assessment.component';
import { DeterminationSummaryComponent } from './determination-summary/determination-summary.component';
import { SignOffFollowUpComponent } from './sign-off-follow-up/sign-off-follow-up.component';
import { DetClientBannerModule } from '../../shared/determination/client-banner/det-client-banner.module';
import { ClientCaseFolderComponent } from './client-case-folder/client-case-folder.component';
import { DetDiagnosisModule } from '../../shared/determination/diagnosis/det-diagnosis.module';
import { DetHousingDeterminationDocumentsModule } from '../../shared/determination/documents/det-housing-determination-documents.module';
import { HomelessHistoryModule } from 'src/app/shared/homeless-history/homeless-history.module';
import { MatchSourcesComponent } from './match-sources/match-sources.component';
import { ApplicationComponent } from './application/application.component';
import { OutcomeComponent } from './outcome/outcome.component';
import { OutcomeActionComponent } from './outcome/outcome-action.component';
import { AutoAssignmentComponent } from './auto-assignment/auto-assignment.component';
import { AssignmentHistoryComponent } from './assignment-history/assignment-history.component';
import { MyWorklistComponent } from './my-worklist/my-worklist.component';
import { CaseUnAssignmentDialogComponent } from './my-worklist/case-unassignment-dialog/case-unassignment-dialog.component';
import { MyWorklistPendingGridComponent } from './my-worklist/my-worklist-pending-grid/my-worklist-pending-grid.component';
import { MyWorklistPendingActionComponent } from './my-worklist/my-worklist-pending-grid/my-worklist-pending-action.component';
import { MyWorklistFollowUpGridComponent } from './my-worklist/my-worklist-followup-grid/my-worklist-followup-grid.component';
import { MyWorklistFollowUpActionComponent } from './my-worklist/my-worklist-followup-grid/my-worklist-followup-action.component';
import { MyWorklistCompletedGridComponent } from './my-worklist/my-worklist-completed-grid/my-worklist-completed-grid.component';
import { MyWorklistCompletedActionComponent } from './my-worklist/my-worklist-completed-grid/my-worklist-completed-action.component';
import { CompletedApplicationsDialogComponent } from './my-worklist/completed-apps-dialog.component'
import { DetSummaryModule } from '../../shared/determination/summary/det-summary.module';
import { DetSummaryActionComponent } from '../../shared/determination/summary/det-summary-action.component';
import { DetReversalEligibilityComponent } from '../../shared/determination/summary/det-reversal-eligibility.component';
import { HousingProgramMatchComponent } from './match-sources/housing-program-match/housing-program-match.component';
import { HousingProgramMatchActionComponent } from './match-sources/housing-program-match/housing-program-match-action.component';
import { DhsMatchComponent } from './match-sources/dhs-match/dhs-match.component';
import { DhsMatchActionComponent } from './match-sources/dhs-match/dhs-match-action.component';
import { HasaMatchComponent } from './match-sources/hasa-match/hasa-match.component';
import { HasaMatchActionComponent } from './match-sources/hasa-match/hasa-match-action.component';
import { MedicaidMatchComponent } from './match-sources/medicaid-match/medicaid-match.component';
import { MedicaidMatchActionComponent } from './match-sources/medicaid-match/medicaid-match-action.component';
import { StarsMatchActionComponent } from './match-sources/stars-match/stars-match-action.component';
import { DycdMatchActionComponent } from './match-sources/dycd-match/dycd-match-action.component';
import { StarsMatchComponent } from './match-sources/stars-match/stars-match.component';
import { MyWorklistGridComponent } from './my-worklist/my-worklist-grid/my-worklist-grid.component';
import { CaseNotesModule } from 'src/app/shared/client-case-folder/case-notes/case-notes.module';
import { ClientConsentWithdrawnModule } from 'src/app/shared/client-case-folder/client-consent-withdrawn/client-consent-withdrawn.module';
import { CaseNotesActionComponent } from 'src/app/shared/client-case-folder/case-notes/case-notes-action.component';
import { ClientConsentWithdrawnActionComponent } from 'src/app/shared/client-case-folder/client-consent-withdrawn/client-consent-withdrawn-action.component';
import { CaseClientDocumentsModule } from 'src/app/shared/client-case-folder/case-client-documents/case-client-documents.module';
import { CoordinatedAssessmentSurveyModule } from 'src/app/shared/client-case-folder/coordinated-assessment-survey/coordinated-assessment-survey.module';
import { PreviousApplicationsDeterminationsModule } from 'src/app/shared/client-case-folder/previous-applications-determinations/previous-applications-determinations.module';
import { VcsReferralsPlacementsModule } from 'src/app/shared/client-case-folder/vcs-referrals-placements/vcs-referrals-placements.module';
import { VpsReferralsModule } from 'src/app/shared/client-case-folder/vps-referrals/vps-referrals.module';
import { PreviousApplicationsDeterminationsActionComponent } from 'src/app/shared/client-case-folder/previous-applications-determinations/previous-applications-determinations-action.component';
import { DeterminationDocumentsDialogComponent } from './outcome/determination-documents-dialog.component';
import { HousingApplicationSupportingDocumentsModule } from 'src/app/shared/housing-application-supporting-documents/housing-application-supporting-documents.module';
import { AdlReviewModule } from 'src/app/shared/adl-review/adl-review.module';
import { SvaReviewComponent } from './vulnerability-assessment/sva-review/sva-review.component';
import { DetFollowUpReasonComponent } from 'src/app/pact-modules/determination/sign-off-follow-up/follow-up-reason.component';
import { HomelessOneFourYearsComponent } from './homeless-review/homeless-one-four-years/homeless-one-four-years.component';
import { ResidentialTreatmentHistoryComponent } from './homeless-review/residential-treatment-history/residential-treatment-history.component';
import { HomelessAtRiskComponent } from './homeless-review/homeless-at-risk/homeless-at-risk.component';
import { HomelessSummaryComponent } from './homeless-review/homeless-summary/homeless-summary.component';
import { HousingHomelessReportComponent } from './homeless-review/housing-homeless-report/housing-homeless-report.component';
import { SvaOutcomeComponent } from './vulnerability-assessment/sva-outcome/sva-outcome.component';
import { DycdMatchComponent } from './match-sources/dycd-match/dycd-match.component';
import { SurveyClientConsentWithdrawnModule } from 'src/app/shared/client-case-folder/survey-client-consent-withdrawn/survey-client-consent-withdrawn.module';
import { ClientDocumentsGridModule } from 'src/app/shared/client-documents-grid/client-documents-grid.module';
import { PactClientDocumentsGridModule } from 'src/app/shared/pact-client-documents-grid/pact-client-documents-grid.module';

@NgModule({
  declarations: [
    HomelessReviewComponent,
    CaseAssignmentComponent,
    CaseAssignmentDialogComponent,
    ClinicalReviewComponent,
    MedicaidPrioritizationComponent,
    VulnerabilityAssessmentComponent,
    DeterminationSummaryComponent,
    SignOffFollowUpComponent,
    ClientCaseFolderComponent,
    MatchSourcesComponent,
    ApplicationComponent,
    OutcomeComponent,
    OutcomeActionComponent,
    AutoAssignmentComponent,
    AssignmentHistoryComponent,
    MyWorklistComponent,
    CaseUnAssignmentDialogComponent,
    MyWorklistPendingGridComponent,
    MyWorklistPendingActionComponent,
    MyWorklistFollowUpGridComponent,
    MyWorklistFollowUpActionComponent,
    MyWorklistCompletedGridComponent,
    MyWorklistCompletedActionComponent,
    CompletedApplicationsDialogComponent,
    DetSummaryActionComponent,
    DetReversalEligibilityComponent,
    HousingProgramMatchComponent,
    HousingProgramMatchActionComponent,
    DhsMatchComponent,
    DhsMatchActionComponent,
    HasaMatchComponent,
    HasaMatchActionComponent,
    MedicaidMatchComponent,
    MedicaidMatchActionComponent,
    StarsMatchActionComponent,
    DycdMatchActionComponent,
    StarsMatchComponent,
    MyWorklistGridComponent,
    CaseNotesActionComponent,
    ClientConsentWithdrawnActionComponent,
    PreviousApplicationsDeterminationsActionComponent,
    DeterminationDocumentsDialogComponent,
    SvaReviewComponent,
    HomelessOneFourYearsComponent,
    ResidentialTreatmentHistoryComponent,
    HomelessAtRiskComponent,
    HomelessSummaryComponent,
    HousingHomelessReportComponent,
    DetFollowUpReasonComponent,
    SvaOutcomeComponent,
    DycdMatchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DeterminationRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    ErrorsModule,
    FormsModule,
    ReactiveFormsModule,
    ContentBannerModule,
    TextMaskModule,
    ConfirmDialogModule,
    HomelessHistoryModule,
    NavFooterModule,
    DetClientBannerModule,
    DetDiagnosisModule,
    DetHousingDeterminationDocumentsModule,
    DetSummaryModule,
    CaseAssignmentModule,
    CaseNotesModule,
    ClientConsentWithdrawnModule,
    SurveyClientConsentWithdrawnModule,
    CaseClientDocumentsModule,
    CoordinatedAssessmentSurveyModule,
    PreviousApplicationsDeterminationsModule,
    VcsReferralsPlacementsModule,
    VpsReferralsModule,
    HousingApplicationSupportingDocumentsModule,
    ClientDocumentsGridModule,
    PactClientDocumentsGridModule,
    AdlReviewModule,
    ToastrModule.forRoot({
      progressBar: true,
      progressAnimation: 'increasing'
    }),
    AgGridModule.withComponents([DetSummaryActionComponent,
      HousingProgramMatchActionComponent,
      DhsMatchActionComponent,
      HasaMatchActionComponent,
      MedicaidMatchActionComponent,
      StarsMatchActionComponent,
      DycdMatchActionComponent,
      OutcomeActionComponent,
      CaseNotesActionComponent,
      ClientConsentWithdrawnActionComponent,
      PreviousApplicationsDeterminationsActionComponent,
      MyWorklistPendingActionComponent,
      MyWorklistFollowUpActionComponent,
      MyWorklistCompletedActionComponent,
      DeterminationDocumentsDialogComponent]),
    NgxMaskModule.forRoot()
  ],
  entryComponents: [DetReversalEligibilityComponent, DetFollowUpReasonComponent, CompletedApplicationsDialogComponent, CaseAssignmentDialogComponent, CaseUnAssignmentDialogComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DeterminationModule { }
