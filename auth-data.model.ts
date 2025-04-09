export interface AuthData {
  optionUserId: number;
  lanId: string;
  nonHraLanId: string;
  firstName: string;
  lastName: string;
  email: string;
  officePhone: string;
  officeExt: string;
  faxNumber: string;
  cellPhone: string;
  initials: string;
  salutation: string;
  lastAccessDate: string;
  roleId: number;
  roleName: string;
  agencyId: number;
  agencyNo: string;
  agencyName: string;
  agencyType: string;
  environment: string;
  authToken: string;
  siteCategoryType: [
    {
      siteCategory: number;
    }
  ];
  userFunctions: [
    {
      functionId: number;
      functionName: string;
    }
  ];
}
