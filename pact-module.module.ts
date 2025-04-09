import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ErrorsModule } from 'src/app/shared/errors-handling/errors.module';
import { NgxHmCarouselModule } from 'ngx-hm-carousel';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';
/** User Idle mode */
import { UserIdleModule } from 'angular-user-idle';
import { PactRoutingModule } from './pact-routing.module';
import { PactLandingPageComponent } from '../core/pact-landing-page/pact-landing-page.component';
import { PactDashboardComponent } from '../core/pact-dashboard/pact-dashboard.component';
import { SidenavListComponent } from '../core/sidenav-list/sidenav-list.component';
import { NewAppsSidenavListComponent } from '../core/sidenav-list/new-apps-sidenav-list/new-apps-sidenav-list.component';
import { PendingAppsSidenavListComponent } from '../core/sidenav-list/pending-apps-sidenav-list/pending-apps-sidenav-list.component';
import { DeterminationSidenavListComponent } from '../core/sidenav-list/determination-sidenav-list/determination-sidenav-list.component';
import { TadSidenavListComponent } from '../core/sidenav-list/tad-sidenav-list/tad-sidenav-list.component';
import { ContentBannerModule } from '../shared/content-banner/content-banner.module';
import { ImpersonateComponent } from '../core/impersonate/impersonate.component';
import { CapsModule } from './coordinatedAssessmentSurvey/caps-module.module';
import { ReportsModule } from './reports/reports-module.module';
import { ShsModule } from './supportiveHousingSystem/shs-module.module';
import { VcsModule } from './vacancyControlSystem/vcs-module.module';
import { DeterminationModule } from './determination/determination-module.module'
import { MLModule } from './masterLeasing/ml-module.module'
import { TestingPageComponent } from '../shared/testing-page/testing-page.component';
import { DropdownComponent } from '../shared/testing-page/ag-grid-test/dropdown.component';
import { Dropdown1Component } from '../shared/testing-page/ag-grid-test/dropdown1.component';
import { IdleCheckDirective } from '../core/session-out/idle-check.directive';
import { DirectivesModule } from '../shared/directives/directives.module';
import { PipesModule } from '../shared/pipes/pipes.module';
import { TutorialModule } from 'src/app/shared/tutorial/tutorial.module';
import { SupportDialogComponent } from '../core/pact-landing-page/support-dialog/support-dialog.component';
import { environment } from 'src/environments/environment';
import { TrainingComponent } from '../shared/information-resource/training/training.component';
import { AnnouncementComponent } from '../shared/information-resource/announcement/announcement.component';
import { MLTadSidenavListComponent } from '../core/sidenav-list/ml-tad-sidenav-list/ml-tad-sidenav-list.component';
import { AgencySystemAdminsComponent } from '../shared/information-resource/agency-system-admins/agency-system-admins.component';
import { RRHModule } from './rrhApplication/rrh.module';
import { NewRRHReferralFormSidenavListComponent } from '../core/sidenav-list/new-rrh-referral-form-sidenav-list/new-rrh-referral-form-sidenav-list.component';
import { PendingRRHReferralFormSidenavListComponent } from '../core/sidenav-list/pending-rrh-referral-form-sidenav-list/pending-rrh-referral-form-sidenav-list.component';

@NgModule({
  declarations: [
    PactLandingPageComponent,
    PactDashboardComponent,
    SidenavListComponent,
    NewAppsSidenavListComponent,
    PendingAppsSidenavListComponent,
    DeterminationSidenavListComponent,
    TadSidenavListComponent,
    ImpersonateComponent,
    TestingPageComponent,
    DropdownComponent,
    Dropdown1Component,
    IdleCheckDirective,
    SupportDialogComponent,
    TrainingComponent,
    AnnouncementComponent,
    MLTadSidenavListComponent,
    AgencySystemAdminsComponent,
    NewRRHReferralFormSidenavListComponent,
    PendingRRHReferralFormSidenavListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ContentBannerModule,
    PactRoutingModule,
    CapsModule,
    DeterminationModule,
    MLModule,
    ShsModule,
    RRHModule,
    VcsModule,
    ReportsModule,
    DirectivesModule,
    PipesModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    MaterialModule,
    ErrorsModule,
    NgxHmCarouselModule,
    TutorialModule,
    // Optionally you can set time for `idle`, `timeout` and `ping` in seconds.
    // Default values: `idle` is 1200 (20 minutes), `timeout` is 1 (1 second)
    // and `ping` is -1 (not used).
    UserIdleModule.forRoot({idle: environment.idleTimeOut, timeout: 1, ping: -1}),
    AgGridModule.withComponents(
      [
        Dropdown1Component,
      ]
    ),
  ],
  entryComponents: [SupportDialogComponent]
})
export class PactModule { }
