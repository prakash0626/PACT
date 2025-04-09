"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app/app.module");
var environment_1 = require("./environments/environment");
var ag_grid_enterprise_1 = require("ag-grid-enterprise");
// LicenseManager.setLicenseKey('Evaluation_License-_Not_For_Production_Valid_Until_9_November_2019__MTU3MzI1NzYwMDAwMA==526b977da574655beaf945b1a9c41241');
ag_grid_enterprise_1.LicenseManager.setLicenseKey('CompanyName=PruTech Solutions, Inc.,LicensedGroup=PRU555_SEAMS,LicenseType=MultipleApplications,LicensedConcurrentDeveloperCount=10,LicensedProductionInstancesCount=1,AssetReference=AG-008255,ExpiryDate=22_May_2021_[v2]_MTYyMTYzODAwMDAwMA==9eb8302480d5bebbec0ff0506c171d9a');
require("hammerjs");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map