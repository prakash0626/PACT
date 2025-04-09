import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionOutComponent } from './core/session-out/session-out.component';
import { LoginComponent } from './core/sign-in/login.component';
import { ErrorsComponent } from './shared/errors-handling/errors-component/errors.component';
import { TestingPageComponent } from './shared/testing-page/testing-page.component';
import { TestingPage1Component } from './shared/testing-page/testing-page1/testing-page1.component';
import { AgGridTestComponent } from './shared/testing-page/ag-grid-test/ag-grid-test.component';
import { JuniperAuthenticationComponent } from './services/auth/juniper-authentication/juniper-authentication.component';
import { UnSupportedBrowserComponent } from './shared/un-supported-browser/un-supported-browser.component';
import { ExternalAuthenticationComponent } from './services/auth/external-authentication/external-authentication.component';
import { ExternalLogoutComponent } from './services/auth/external-logout/external-logout.component';
import{AzureADAuthenticationComponent} from './services/auth/azure-ad-authentication/azure-ad-authentication.component';

const routes: Routes = [ 
  {path:' ',component:AzureADAuthenticationComponent}, 
  {path:'azureProxy',component:AzureADAuthenticationComponent}, 
  {path: 'juniper/:tempKey', component: JuniperAuthenticationComponent },
  {path: 'externalAuth', component: ExternalAuthenticationComponent},
  {path: 'externalLogout', component: ExternalLogoutComponent},
  { path: 'session-out/:value', component: SessionOutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'un-supported-browser', component: UnSupportedBrowserComponent },

  { path: 'testing-page', component: TestingPageComponent },
  {
    path: 'testing-page1',
    component: TestingPage1Component,
  },
  { path: 'ag-grid-test', component: AgGridTestComponent },

  { path: '**', component: ErrorsComponent, data: { error: 404 } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
     { useHash: true
     // initialNavigation: isInIframe() ? 'disabled' : undefined
     })],
  exports: [RouterModule]
  // providers: [UserAuthGuard, AdminAuthGuard]
})
export class AppRoutingModule {}
export function isInIframe() {
  return window !== window.parent && !window.opener;
}