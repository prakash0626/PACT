import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PactLandingPageComponent } from '../core/pact-landing-page/pact-landing-page.component';
import { PactDashboardComponent } from '../core/pact-dashboard/pact-dashboard.component';
import { ImpersonateComponent } from '../core/impersonate/impersonate.component';
import { SiteTypeMasterAuthGuard } from '../services/auth/site-type-auth-guards/site-type-master-auth.guard';
import { SiteTypeGuard, MixedAuthGuard } from '../models/pact-enums.enum';
import { TrainingComponent } from '../shared/information-resource/training/training.component';
import { AnnouncementComponent } from '../shared/information-resource/announcement/announcement.component';
import { AgencySystemAdminsComponent } from '../shared/information-resource/agency-system-admins/agency-system-admins.component';
import{AzureADAuthenticationComponent} from '../services/auth/azure-ad-authentication/azure-ad-authentication.component';
import { MsalGuard } from '@azure/msal-angular';
const pactRoutes: Routes = [
  {
    
      path: '',
      component: PactLandingPageComponent,
     // canActivate: [MsalGuard],
      children: [
        { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      // {path: 'dashboard', component: PactDashboardComponent, resolve: { auth: AuthResolver }},
      {
        path: 'dashboard',
        component: PactDashboardComponent,
        canActivate: [SiteTypeMasterAuthGuard],
        data: {
          guards: [
            MixedAuthGuard.AllSiteCategory
          ]
        }
      },
      {
        path: 'information/training',
        component: TrainingComponent,
        canActivate: [SiteTypeMasterAuthGuard],
        data: {
          guards: [
            MixedAuthGuard.AllSiteCategory
          ]
        }
      },
      {
        path: 'information/announcement',
        component: AnnouncementComponent,
        canActivate: [SiteTypeMasterAuthGuard],
        data: {
          guards: [
            MixedAuthGuard.AllSiteCategory
          ]
        }
      },
      {
        path: 'information/agency-system-admins',
        component: AgencySystemAdminsComponent,
        canActivate: [SiteTypeMasterAuthGuard],
        data: {
          guards: [
            MixedAuthGuard.AllSiteCategory
          ]
        }
      },
      {
        path: 'impersonate',
        component: ImpersonateComponent,
        canActivate: [SiteTypeMasterAuthGuard],
        data: {
          guards: [
            SiteTypeGuard.Impersonate
          ]
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(pactRoutes)],
  exports: [RouterModule]
})
export class PactRoutingModule {}
