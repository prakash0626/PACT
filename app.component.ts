import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { Subscription } from 'rxjs';
import { NavService } from './core/sidenav-list/nav.service';
import { CommonService } from './services/helper-services/common.service';
import { UserService } from './services/helper-services/user.service';
import { VersionCheckService } from './services/auth/version-check.service';
import { BroadcastService, MsalService } from '@azure/msal-angular';
import { MSALService } from './services/auth/msal.service';
import { AuthData } from '../app/models/auth-data.model';
import { Router } from '@angular/router';
//import { privateDecrypt } from 'crypto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {
  isLoading: boolean = true;
  isOverlay: boolean = false;
  account : any;
  extUserEmail:string;
   accesstoken:string;
  environmentName = '';
  versionCheckUrl: string;
  frequency: number;
  //capsOrigin: string = null;
  capsHostName: string = null;

  navStatusSub: Subscription;
  environmentNameSub: Subscription;
  isIframe = false;
  loggedIn = false;
  constructor(
    private authService: AuthService,
    private navService: NavService,
    private commonService: CommonService,
    private userService: UserService,
    private versionCheckService: VersionCheckService,
    private broadcastService: BroadcastService, //For MSAL
    private msalAuthService: MsalService, //For MSAL
    private msalService: MSALService ,//application service to get user
    private router: Router,
  ) {
  }

  ngOnInit() {
    
    this.capsHostName = window.location.hostname;
 
    if(this.capsHostName.includes("pactqaexternalaccess-nychra") || this.capsHostName.includes("localhost") )
    {
      console.log("Host Name is checked and going ad auth",this.capsHostName)
      this.authService.setisExternalUserFlag(true);
      
    this.checkoutAccount();
  
    this.broadcastService.subscribe('msal:loginSuccess', () => {
      this.checkoutAccount();
    });
  }
  else  
  {
    console.log("Host Name in Appcomment",this.capsHostName)
    this.authService.setisExternalUserFlag(false);
    this.RegularAuthCall();
  }
        
  }

  RegularAuthCall(){
 

    /* Getting the environment Name from the user Info in UserService */
    this.environmentNameSub = this.userService.getUserData()
      .subscribe(res => {
        
        if (res) {
          console.log("App -- this.userService.getUserData",res);
          this.environmentName = res.environment.toUpperCase();
          //this.capsOrigin = window.location.origin;
          // if (this.capsOrigin) {
          //   this.versionCheckUrl = this.capsOrigin + "/PACT/version.json";
          // }
          // else {
          //   this.versionCheckUrl = "https://webd16options01.windows.nyc.hra.nycnet/PACT/version.json";
          // }
          switch (this.environmentName) {
            case "PROD":
              if(this.capsHostName.includes("pactqaexternalaccess-nychra"))
                {
                  this.versionCheckUrl = "https://pactexternalaccess-nychra.msappproxy.net/PACT/version.json";
                }
                else 
                {
                  this.versionCheckUrl = "https://capsprod.hra.nycnet/PACT/version.json";
                }            
              break;
            case "UAT":
              this.versionCheckUrl = "https://webu16options01.windows.nyc.hra.nycnet/PACT/version.json";
              break;
            case "QA":
              if(this.capsHostName.includes("pactqaexternalaccess-nychra"))
              {
                this.versionCheckUrl = "https://pactqaexternalaccess-nychra.msappproxy.net/PACT/version.json";
              }
              else 
              {
                this.versionCheckUrl = "https://casqa.hra.nycnet/PACT/version.json";
              }
              this.versionCheckUrl = "https://casqa.hra.nycnet/PACT/version.json";
              break;
            case "PACTQANEW":
              this.versionCheckUrl = "https://webq16options01.windows.nyc.hra.nycnet/PACTNEW/version.json";
              break;
            case "DEV":
              this.versionCheckUrl = "https://webd16options01.windows.nyc.hra.nycnet/PACT/version.json";
              break;
            case "HOTFIX":
              this.versionCheckUrl = "https://webq16options02.windows.nyc.hra.nycnet/PACT/version.json";
              break;
            default:
              this.versionCheckUrl = "https://webd16options01.windows.nyc.hra.nycnet/PACT/version.json";
              break;
          }

          if (this.capsHostName) {
            if ((this.capsHostName == "webq16options01.windows.nyc.hra.nycnet" || this.capsHostName == "webq16options01" ) && this.environmentName !== 'PACTQANEW') {
              window.location.href = "https://casqa.hra.nycnet/PACT";
            }
            
            if( this.capsHostName == "https://pactqaexternalaccess-nychra.msappproxy.net")
            {
              window.location.href = "https://pactqaexternalaccess-nychra.msappproxy.net/PACT";
            }
            else if (this.capsHostName == "webp16options01.windows.nyc.hra.nycnet" || this.capsHostName == "webp16options01") {
              window.location.href = "https://capsprod.hra.nycnet/PACT";
            }
          }

          //Frequency for Prod - 60 Min, All Lower Environment - 5 Min
          if (this.environmentName === "PROD")
            this.frequency = 1000 * 60 * 60;
          else
            this.frequency = 1000 * 60 * 5;

          //Version Checking uncomment for prod
       //   this.versionCheckService.initVersionCheck(this.versionCheckUrl, this.frequency);
        }
      });

    /** Progress Spinner */
    if (this.authService.isUserTokenValid()) {
    
      setTimeout(() => {
        this.isLoading = false;
      }, 10);
    } else {
       
      this.navStatusSub = this.navService.getCurrentUrl().subscribe((url: string) => {
        const activeUrl = url.split('/');
        if (activeUrl.length > 1) {
          setTimeout(() => {
            this.isLoading = false;
          }, 10);
        }
      });
    }

    /** Setting isOverlay Locally **/
    this.commonService.getIsOverlay().subscribe(res => { this.isOverlay = res });
   // this.router.navigate(['/dashboard']);
  }

  MSALCall(){
     
    this.checkoutAccount();  
    this.broadcastService.subscribe('msal:loginSuccess', () => {
      
      this.checkoutAccount();
    });
  }

 
   checkoutAccount() {
    this.loggedIn = !!this.msalAuthService.getAccount();
      
     
      if(this.loggedIn && this.authService.getToken() !== null && this.authService.getToken() === undefined)
     {
      
       const account = this.msalAuthService.getAccount();
       console.log("After LoggedIN ",account);
      //  this.msalAuthService.acquireTokenSilent({
      //     account:account ,
      //     scopes:['User.Read'] 
      //   }).then(data => {
      //     console.log("token data",data)
      //     data.accessToken;
      //   this.authService.setToken(data.accessToken);
      
      // });


       this.authService.getUserBySamalAccount(account.idTokenClaims["SamAccountName"]).subscribe(rsp =>{
         
       if(rsp != null || rsp != undefined) 
       {
        const data = rsp as AuthData;
               
                if (data && data.optionUserId > 0) {
                  console.log("User data after calling API ",data);
                //  data.authToken = this.accesstoken;
              
                  this.userService.setUserData(data);
                  this.authService.setToken(''); //clearing the token
                  this.authService.authUserResponse(data);
                  this.RegularAuthCall();
                }
                else {
                  throw new Error('UnAuthorizedUser');
                }
  
         
        }
        else
        {
          throw new Error('UnAuthorizedUser');
        }
      });
     }
     else
     {
       console.log("checkoutAccount - else");
       this.azureADlogin();
     }
   }
 


  azureADlogin() {
    try
    {
    const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

    if (isIE) {
      this.msalAuthService.loginRedirect;
    } else {
      this.msalAuthService.loginRedirect();
    }
  }
  catch(error)
  {
    console.log("error authentication ",error);
  }
}
  ngOnDestroy() {
    if (this.navStatusSub) {
      this.navStatusSub.unsubscribe();
    }
    if (this.environmentNameSub) {
      this.environmentNameSub.unsubscribe();
    }
  }
}
