import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CountdownModule } from 'ngx-countdown';
import { IdleDialogBoxComponent } from './core/session-out/idle-dialog-box/idle-dialog-box.component';
import { SessionOutComponent } from './core/session-out/session-out.component';
import { LoginComponent } from './core/sign-in/login.component';
/** PACT MODULE */
import { PactModule } from './pact-modules/pact-module.module';
/** AgGrid */
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';
import { AgGridTestComponent } from './shared/testing-page/ag-grid-test/ag-grid-test.component';

import { TestingPage1Component } from './shared/testing-page/testing-page1/testing-page1.component';
/** Global Error Handling */
import { ErrorsModule } from './shared/errors-handling/errors.module';

import { ClickableComponent } from './shared/testing-page/ag-grid-test/clickable.component';
import { ClickableParentComponent } from './shared/testing-page/ag-grid-test/clickable.parent.component';
import { ConfirmDialogComponent } from './shared/confirm-dialog/confirm-dialog.component';
import { ClientDocumentsDialogComponent } from './shared/client-documents-dialog/client-documents-dialog.component';
import { ToastrModule } from 'ngx-toastr';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServerInterceptor } from './services/auth/server.interceptor';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { TestPactCalendarModule } from './shared/testing-page/test-calendar/test-pact-calendar.module';
import { JuniperAuthenticationComponent } from './services/auth/juniper-authentication/juniper-authentication.component';
import { SupportingDocumentsDialogComponent } from './shared/supporting-documents-dialog/supporting-documents-dialog.component';
import { UnSupportedBrowserComponent } from './shared/un-supported-browser/un-supported-browser.component';
import { ExternalAuthenticationComponent } from './services/auth/external-authentication/external-authentication.component';
import { ExternalLogoutComponent } from './services/auth/external-logout/external-logout.component';
import { ConsentWithdrawnDocumentsDialogComponent } from './shared/consent-withdrawn-documents-dialog/consent-withdrawn-documents-dialog.component';
import { ConsentWithdrawnAttachDocumentsDialogComponent } from './shared/consent-withdrawn-attach-documents-dialog/consent-withdrawn-attach-documents-dialog.component';
//For MSAL
import { MsalModule, MsalInterceptor } from '@azure/msal-angular';
import { AzureADAuthenticationComponent } from './services/auth/azure-ad-authentication/azure-ad-authentication.component';
import { environment } from 'src/environments/environment';
import { env } from 'process';

///# add the urls that will called by application.#/
export const protectedResourceMap: [string, string[]][] = [
  ['https://graph.microsoft.com/v1.0/me', ['user.read']],
   [environment.pactAdApiUrl,null],  
   
  //  ['https://webq16options01.windows.nyc.hra.nycnet/PACTAPI/api/',null],
  //  ['api://994beb56-7e7d-4265-a74c-9639fce262d7/Pact.Api',null]
];
const isIE = window.navigator.userAgent.indexOf("MSIE ") > -1 || window.navigator.userAgent.indexOf("Trident/") > -1;

export const DATE_FORMATS = {
  parse: {
    dateInput: 'MM/DD/YYYY',
  },
  display: {
    dateInput: 'MM/DD/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


@NgModule({
  declarations: [
    AppComponent,
    IdleDialogBoxComponent,
    SessionOutComponent, LoginComponent,
    TestingPage1Component,
    AgGridTestComponent,
    ClickableComponent,
    ClickableParentComponent,
    JuniperAuthenticationComponent,
    UnSupportedBrowserComponent,
    ExternalAuthenticationComponent,
    ExternalLogoutComponent,
    AzureADAuthenticationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TestPactCalendarModule,
    AgGridModule.withComponents([
      ClickableParentComponent
    ]),
    ToastrModule.forRoot({
      progressBar: true,
      progressAnimation: 'increasing'
    }),
    CountdownModule,
    // CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    PactModule,
    ErrorsModule,
    AppRoutingModule, // Make sure this module is imported after all  modules, it has the routing for unknown url(**)
    MsalModule.forRoot({
      auth: {
        clientId: environment.clientID,
        authority: environment.authority,       
        validateAuthority: true,         
        redirectUri: environment.redirectUri,
        postLogoutRedirectUri: environment.postLogoutRedirectUri,
        navigateToLoginRequestUrl: true,

        // clientId: '74230ae7-c226-410f-bb66-2a5909d3b6f1',
        // authority: "https://login.microsoftonline.com/369ccac9-1d3d-435b-b214-c86f3a380236",
        // validateAuthority: true,
        // // redirectUri: 'http://localhost:4200',
        // // postLogoutRedirectUri: 'http://localhost:4200',
        // redirectUri: "https://pactqaexternalaccess-nychra.msappproxy.net/PACT",
        // postLogoutRedirectUri: "https://pactqaexternalaccess-nychra.msappproxy.net/PACT",
        // navigateToLoginRequestUrl: true,
       
      },
      cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: isIE, // set to true for IE 11
      },
    },
    {
      popUp: !isIE,
      consentScopes: [
        "user.read",
        "openid",
        "profile",
        environment.apiScope
      ],
      unprotectedResources: ["https://www.microsoft.com/en-us/"],
      protectedResourceMap,
      extraQueryParameters: {}
    }
    )
  ],
  
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ServerInterceptor, multi: true},
   { provide: HTTP_INTERCEPTORS, useClass: MsalInterceptor, multi: true},
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS },
  ],
  entryComponents: [IdleDialogBoxComponent, ConfirmDialogComponent, ClientDocumentsDialogComponent, SupportingDocumentsDialogComponent, ConsentWithdrawnDocumentsDialogComponent, ConsentWithdrawnAttachDocumentsDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
