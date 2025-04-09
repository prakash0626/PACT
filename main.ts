import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import {LicenseManager} from 'ag-grid-enterprise';
// LicenseManager.setLicenseKey('Evaluation_License-_Not_For_Production_Valid_Until_9_November_2019__MTU3MzI1NzYwMDAwMA==526b977da574655beaf945b1a9c41241');
LicenseManager.setLicenseKey('CompanyName=PruTech Solutions, Inc.,LicensedGroup=PRU555_SEAMS,LicenseType=MultipleApplications,LicensedConcurrentDeveloperCount=10,LicensedProductionInstancesCount=1,AssetReference=AG-008255,ExpiryDate=22_May_2021_[v2]_MTYyMTYzODAwMDAwMA==9eb8302480d5bebbec0ff0506c171d9a');

import 'hammerjs';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
