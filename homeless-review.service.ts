import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../../../environments/environment';

//Models
import {
    iHomelessCountsInput,
    iHomeless1To4YearsInput,
    SaveHomeless1To4Years,
    iResidentialTreatmentHistoryInput,
    SaveResidentialTreatmentHistory,
    iHomelessAtRiskInput,
    SaveHomelessAtRisk,
    iHeadOfHouseholdInput
} from './homeless-review.model';

@Injectable({
    providedIn: 'root'
})

export class HomelesReviewService {
    isHomeless1To4YearsTabEnabled = new BehaviorSubject<boolean>(false);
    isResidentialTreatmentTabEnabled = new BehaviorSubject<boolean>(false);
    isHomelessAtRiskTabEnabled = new BehaviorSubject<boolean>(false);
    isHomelessSummaryTabEnabled = new BehaviorSubject<boolean>(false);
    isHomelessReportTabEnabled = new BehaviorSubject<boolean>(false);
    isAtRiskTabEligible = new BehaviorSubject<boolean>(false);

    getHomelessCountsUrl = environment.pactAdApiUrl + 'DETHomelessReview/GetHomelessCounts';
    getHomeless1To4YearsUrl = environment.pactAdApiUrl + 'DETHomelessReview/GetHomeless1To4Years';
    saveHomeless1To4YearsUrl = environment.pactAdApiUrl + 'DETHomelessReview/SaveHomeless1To4Years';
    getResidentialTreatmentHistoryUrl = environment.pactAdApiUrl + 'DETHomelessReview/GetResidentialTreatmentHistory';
    saveResidentialTreatmentHistoryUrl = environment.pactAdApiUrl + 'DETHomelessReview/SaveResidentialTreatmentHistory';
    getHomelessAtRiskUrl = environment.pactAdApiUrl + 'DETHomelessReview/GetHomelessAtRisk';
    saveHomelessAtRiskUrl = environment.pactAdApiUrl + 'DETHomelessReview/SaveHomelessAtRisk';
    getHeadOfHouseholdUrl = environment.pactAdApiUrl + 'DETHomelessReview/GetHeadOfHousehold';

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private httpClient: HttpClient) {
    }

    setHomeless1To4YearsTabEnabled(value: boolean) {
        this.isHomeless1To4YearsTabEnabled.next(value);
    }
    getHomeless1To4YearsTabEnabled() {
        return this.isHomeless1To4YearsTabEnabled.asObservable();
    }
    setResidentialTreatmentTabEnabled(value: boolean) {
        this.isResidentialTreatmentTabEnabled.next(value);
    }
    getResidentialTreatmentTabEnabled() {
        return this.isResidentialTreatmentTabEnabled.asObservable();
    }
    setHomelessAtRiskTabEnabled(value: boolean) {
        this.isHomelessAtRiskTabEnabled.next(value);
    }
    getHomelessAtRiskTabEnabled() {
        return this.isHomelessAtRiskTabEnabled.asObservable();
    }
    setHomelessSummaryTabEnabled(value: boolean) {
        this.isHomelessSummaryTabEnabled.next(value);
    }
    getHomelessSummaryTabEnabled() {
        return this.isHomelessSummaryTabEnabled.asObservable();
    }
    setHomelessReportTabEnabled(value: boolean) {
        this.isHomelessReportTabEnabled.next(value);
    }
    getHomelessReportTabEnabled() {
        return this.isHomelessReportTabEnabled.asObservable();
    }
    setAtRiskTabEligible(value: boolean) {
        this.isAtRiskTabEligible.next(value);
    }
    getAtRiskTabEligible() {
        return this.isAtRiskTabEligible.asObservable();
    }

    //Get Homeless Counts
    getHomelessCounts(homelessCountsInput: iHomelessCountsInput): Observable<any> {
        if (homelessCountsInput) {
            return this.httpClient.post(this.getHomelessCountsUrl, JSON.stringify(homelessCountsInput), this.httpOptions);
        }
    }

    //Get Homeless 1-4 Years
    getHomeless1To4Years(homeless1To4YearsInput: iHomeless1To4YearsInput): Observable<any> {
        if (homeless1To4YearsInput) {
            return this.httpClient.post(this.getHomeless1To4YearsUrl, JSON.stringify(homeless1To4YearsInput), this.httpOptions);
        }
    }

    //Save Homeless 1-4 Years
    saveHomeless1To4Years(saveHomeless1To4Years: SaveHomeless1To4Years): Observable<any> {
        if (saveHomeless1To4Years) {
            return this.httpClient.post(this.saveHomeless1To4YearsUrl, JSON.stringify(saveHomeless1To4Years), this.httpOptions);
        }
    }

    //Get Residential Treatment History
    getResidentailTreatmentHistory(residentialTreatmentHistoryInput: iResidentialTreatmentHistoryInput): Observable<any> {
        if (residentialTreatmentHistoryInput) {
            return this.httpClient.post(this.getResidentialTreatmentHistoryUrl, JSON.stringify(residentialTreatmentHistoryInput), this.httpOptions);
        }
    }

    //Save Residential Treatment History
    saveResidentialTreatmentHistory(saveResidentialTreatmentHistory: SaveResidentialTreatmentHistory): Observable<any> {
        if (saveResidentialTreatmentHistory) {
            return this.httpClient.post(this.saveResidentialTreatmentHistoryUrl, JSON.stringify(saveResidentialTreatmentHistory), this.httpOptions);
        }
    }

    //Get Homeless At Risk
    getHomelessAtRisk(homelessAtRiskInput: iHomelessAtRiskInput): Observable<any> {
        if (homelessAtRiskInput) {
            return this.httpClient.post(this.getHomelessAtRiskUrl, JSON.stringify(homelessAtRiskInput), this.httpOptions);
        }
    }

    //Save Homeless At Risk
    saveHomelessAtRisk(saveHomelessAtRisk: SaveHomelessAtRisk): Observable<any> {
        if (saveHomelessAtRisk) {
            return this.httpClient.post(this.saveHomelessAtRiskUrl, JSON.stringify(saveHomelessAtRisk), this.httpOptions);
        }
    }

    //Get Head Of Household
    getHeadOfHousehold(headOfHouseholdInput: iHeadOfHouseholdInput): Observable<any> {
        if (headOfHouseholdInput) {
            return this.httpClient.post(this.getHeadOfHouseholdUrl, JSON.stringify(headOfHouseholdInput), this.httpOptions);
        }
    }
}
