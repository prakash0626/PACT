import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PactLandingPageComponent } from 'src/app/core/pact-landing-page/pact-landing-page.component';
import { MatchSourcesComponent } from './match-sources/match-sources.component';
import { CaseAssignmentComponent } from './case-assignment/case-assignment.component';
import { AutoAssignmentComponent } from './auto-assignment/auto-assignment.component';
import { AssignmentHistoryComponent } from './assignment-history/assignment-history.component';
import { ClinicalReviewComponent } from './clinical-review/clinical-review.component';
import { DeterminationSummaryComponent } from './determination-summary/determination-summary.component';
import { HomelessReviewComponent } from './homeless-review/homeless-review.component';
import { MedicaidPrioritizationComponent } from './medicaid-prioritization/medicaid-prioritization.component';
import { SignOffFollowUpComponent } from './sign-off-follow-up/sign-off-follow-up.component';
import { VulnerabilityAssessmentComponent } from './vulnerability-assessment/vulnerability-assessment.component';
import { ClientCaseFolderComponent } from './client-case-folder/client-case-folder.component';
import { SiteTypeMasterAuthGuard } from 'src/app/services/auth/site-type-auth-guards/site-type-master-auth.guard';
import { SiteTypeGuard } from 'src/app/models/pact-enums.enum';
import { ApplicationComponent } from './application/application.component';
import { OutcomeComponent } from './outcome/outcome.component';
import { MyWorklistComponent } from './my-worklist/my-worklist.component';

const reportsRoutes: Routes = [
  {
    path: '',
    component: PactLandingPageComponent,
    children: [
      {
        path: 'ds',
        canActivate: [SiteTypeMasterAuthGuard],
        data: {
          guards: [
            SiteTypeGuard.CAS
          ]
        },
        children: [
          { path: 'application/:applicationId', component: ApplicationComponent },
          { path: 'match-sources/:applicationId', component: MatchSourcesComponent },
          { path: 'case-assignment', component: CaseAssignmentComponent },
          { path: 'auto-assignment', component: AutoAssignmentComponent },
          { path: 'assignment-history/:applicationId', component: AssignmentHistoryComponent },
          { path: 'my-worklist', component: MyWorklistComponent },
          { path: 'clinical-review/:applicationId', component: ClinicalReviewComponent },
          { path: 'determination-summary/:applicationId', component: DeterminationSummaryComponent },
          { path: 'homeless-review/:applicationId', component: HomelessReviewComponent },
          { path: 'medicaid-prioritization/:applicationId', component: MedicaidPrioritizationComponent },
          { path: 'outcome/:applicationId', component: OutcomeComponent },
          { path: 'sign-off-follow-up/:applicationId', component: SignOffFollowUpComponent },
          { path: 'vulnerability-assessment/:applicationId', component: VulnerabilityAssessmentComponent },
          { path: 'client-case-folder/:applicationId', component: ClientCaseFolderComponent }
        ]
      },
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(reportsRoutes)],
  exports: [RouterModule]
})
export class DeterminationRoutingModule { }
