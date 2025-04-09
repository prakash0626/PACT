import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppNotification, ApplicationNotifications, StatsList, UserStatsInputParams,PACTCAPSHandhakeParams } from './pact-dashboard.model';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AgencySiteData, UserAgencyInputParams } from 'src/app/pact-modules/vacancyControlSystem/agency-site-maintenance/agency-site-model';

@Injectable({
  providedIn: 'root'
})

export class PactDashboardService {

 //private apiURL = environment.pactAdApiUrl + 'Dashboard/';
 private apiURL = environment.pactAdApiUrl + 'Dashboard/';
  private getHPsitesForIncompleteUnitsURL = environment.pactAdApiUrl + 'Dashboard/GetHPsitesForIncompleteUnits';
  private saveAppNotificationUserURL = environment.pactAdApiUrl + 'AppNotification/SaveAppNotificationUser';
  private pactCAPSHandshakeURL = environment.pactAdApiUrl + 'Dashboard/SavePactCAPSHandshakeInfo';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private appNotification = new BehaviorSubject<ApplicationNotifications>(null);

  constructor(private httpClient: HttpClient) { }

  getUserStats(userStatsInputParams: UserStatsInputParams) {
    const getUrl = this.apiURL + 'GetUserStats';
    return this.httpClient.post<StatsList[]>(getUrl, userStatsInputParams, this.httpOptions);
  }

  getHPsitesForIncompleteUnits(inputParams: UserAgencyInputParams) {
    return this.httpClient.post<AgencySiteData[]>(this.getHPsitesForIncompleteUnitsURL, inputParams, this.httpOptions);
  }

  setAppNotification(note: ApplicationNotifications) {
    this.appNotification.next(note);
  }

  getAppNotification() {
    return this.appNotification.asObservable();
  }

  saveAppNotificationUser(appNotification: AppNotification) {
    return this.httpClient.post<ApplicationNotifications>(this.saveAppNotificationUserURL, appNotification, this.httpOptions);
  }


  savePactCAPSHandshake(data: PACTCAPSHandhakeParams) {
    return this.httpClient.post<number>(this.pactCAPSHandshakeURL, data, this.httpOptions);
  }

}
