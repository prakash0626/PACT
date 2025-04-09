export enum UserAgencyType {
  PlacementEntity = 'Placement Entity',
  HousingProvider = 'Housing Provider',
  Reviewer = 'Reviewer',
  ReferringAgency = 'ReferringAgency'
}

//Social Security Number Pattern
export enum SocialSecurityPattern {
  Pattern = "^(?!\\b(\\d)\\1+-(\\d)\\1+-(\\d)\\1+\\b)(?!123456789|987654321|111111111|222222222|333333333|444444444|555555555|666666666|777777777|888888888)(?!000|9\\d{2})\\d{3}(?!00)\\d{2}(?!0{4})\\d{4}$"
};

export enum UserSiteType {
  /* value should be the RefGroupDetailID from database */
  SH_RA = 5,
  SH_PE = 6,
  SH_HP = 7,
  CAS = 8,
  RRH_PR = 1454,
  ML_DHS_Liaison = 247,
  ML_Team = 248,
  ML_HP = 249,
  ML_IREA = 250,
}

export enum UserRole {
  /* value should be the RoleID from Database */
  STAFF = 1,
  SUPERVISOR = 2,
  MANAGER = 3,
  SYS_ADMIN = 4
}

export enum ClientSourceType {
  SH = 573,
  CH = 574,
  ML = 575,
  Survey = 1276,
  RRH = 1508
}

export enum SiteTypeGuard {
  /* the value should be the name of auth guards class */
  SH_RA = 'ShRaAuthGuard',
  SH_PE = 'ShPeAuthGuard',
  SH_HP = 'ShHpAuthGuard',
  CAS = 'CasAuthGuard',
  RRH_PR = 'RrhAuthGuard',
  ML_DHS_Liaison = 'MlDhsLiasianAuthGuard',
  ML_Team = 'MlTeamAuthGuard',
  ML_HP = 'MlHpAuthGuard',
  ML_IREA = 'MlIreaAuthGuard',
  Impersonate = 'ImpersonateAuthGuard'
}

export enum UserRoleGuard {
  /* the value should be the name of auth guards class */
  STAFF = 'StaffAuthGuard',
  SUPERVISOR = 'SupervisorAuthGuard',
  MANAGER = 'ManagerAuthGuard',
  SYS_ADMIN = 'SysAdminAuthGuard'

}

export enum MixedAuthGuard {
  /* the value should be the name of auth guards class */
  CAS_STAFF = 'CasStaffAuthGuard',
  CAS_SYS_ADMIN = 'CasSysAdminAuthGuard',
  CAS_SUPERVISOR = 'CasSupervisorAuthGuard',
  AllSiteCategory = 'AllSiteCategoryAuthGuard',
  SH_RA_MANAGER= 'ShRaManagerAuthGuard',
  SH_RA_SUPERVISOR = 'ShRaSupervisorAuthGuard',
  SH_RA_SYS_ADMIN = 'ShRaSysAdminAuthGuard',
  RRH_PR_MANAGER= 'RrhPrManagerAuthGuard',
  RRH_PR_SUPERVISOR = 'RrhPrSupervisorAuthGuard',
  RRH_PR_SYS_ADMIN = 'RrhPrSysAdminAuthGuard',
  SH_HP_MANAGER= 'ShHpManagerAuthGuard',
  SH_HP_SUPERVISOR = 'ShHpSupervisorAuthGuard',
  SH_HP_SYS_ADMIN = 'ShHpSysAdminAuthGuard',
  SH_PE_MANAGER= 'ShPeManagerAuthGuard',
  SH_PE_SUPERVISOR = 'ShPeSupervisorAuthGuard',
  SH_PE_SYS_ADMIN = 'ShPeSysAdminAuthGuard',
  ML_TEAM_SUPERVISOR = 'MLTeamSupervisorAuthGuard',
  ML_TEAM_MANAGER= 'MLTeamManagerAuthGuard',
  ML_TEAM_SYS_ADMIN = 'MLTeamSysAdminAuthGuard',
  ML_HP_SUPERVISOR = 'MLHpSupervisorAuthGuard',
  ML_HP_MANAGER= 'MLHpManagerAuthGuard',
  ML_HP_SYS_ADMIN = 'MLHpSysAdminAuthGuard',
  ML_IREA_SUPERVISOR = 'MLIreaSupervisorAuthGuard',
  ML_IREA_MANAGER= 'MLIreaManagerAuthGuard',
  ML_IREA_SYS_ADMIN = 'MLIreaSysAdminAuthGuard',
  DYCD_STAFF = 'DYCDAuthGuard',
  HHC_STAFF = 'HHCAuthGuard',
  OSAH_STAFF = 'OSAHAuthGuard'
}

export enum Impersonate {
  /* Value should be the same name in database */
  Impersonate = 'IMPERSONATION'
}

// export enum IdleWaitingTime {
//   waitingTime = 300   /* 300 seconds = 5 minutes */
// }

export enum appStatusColor {
  pendingColor = '#FF9900',
  completedColor = '#3cab26',
  noColor = '#EEEEEE'
}

export enum ReferralType {
  Regular = 525,
  Sidedoor = 526
}

export enum CoCType {
  HUDCoC = 527,
  HPDCoC = 528
}

export enum ReferralStatusType {
  Draft = 511,
  Pending = 512,
  Overdue = 513,
  Withdrawn = 514,
  AdministrativelyClosed = 515,
  ClientAcceptedAlternateHousing = 516,
  NotAccepted = 517,
  AcceptedPendingMoveIn = 518,
  MoveInPendingVerification = 519,
  MoveInVerified = 520,
  MoveInRejected = 521,
  MoveOutPendingVerification = 522,
  MoveOutVerified = 523,
  MoveOutRejected = 524,
  MoveInVerifiedFollowUp = 758,
  PendingApproval = 529,
  ReferralNoInterview = 1202,
  ClientDidNotAccept = 1293
}

export enum RRHReferralStatusType {
  RRHPending = 1514,
  RRHOverdue = 1515,
  RRHPendingApproval = 1516,
  RRHWithdrawn = 1517,
  RRHClientAcceptedAlternateHousing = 1518,
  RRHAdministrativelyClosed = 1519,
  RRHReferralNoInterview = 1520,
  RRHClientDidNotAccept = 1521,
  NotEnrolled = 1522,
  EnrollmentPendingVerification = 1523,
  EnrollmentVerified = 1524,
  EnrollmentRejected = 1525,
  ExitPendingVerification = 1526,
  ExitVerified = 1527,
  ExitRejected = 1528  
}

export enum CalendarFor {
  HPSiteObservable = 'HPSiteObservable',
  HPSite = 'HPSite',
  SAPObservable = 'SAPObservable',
  SAP = 'SAP'
}

export enum SchedulerRentalType {
  RentUp = 1394,
  ReRental = 1395,
  RRH = 1543
}

export interface IStates {
  name: string;
  abbreviation: string;
}
export const States: IStates[] = [
  {
    name: "Alabama",
    abbreviation: "AL",
  },
  {
    name: "Alaska",
    abbreviation: "AK",
  },
  {
    name: "American Samoa",
    abbreviation: "AS",
  },
  {
    name: "Arizona",
    abbreviation: "AZ",
  },
  {
    name: "Arkansas",
    abbreviation: "AR",
  },
  {
    name: "California",
    abbreviation: "CA",
  },
  {
    name: "Colorado",
    abbreviation: "CO",
  },
  {
    name: "Connecticut",
    abbreviation: "CT",
  },
  {
    name: "Delaware",
    abbreviation: "DE",
  },
  {
    name: "District Of Columbia",
    abbreviation: "DC",
  },
  {
    name: "Federated States Of Micronesia",
    abbreviation: "FM",
  },
  {
    name: "Florida",
    abbreviation: "FL",
  },
  {
    name: "Georgia",
    abbreviation: "GA",
  },
  {
    name: "Guam",
    abbreviation: "GU",
  },
  {
    name: "Hawaii",
    abbreviation: "HI",
  },
  {
    name: "Idaho",
    abbreviation: "ID",
  },
  {
    name: "Illinois",
    abbreviation: "IL",
  },
  {
    name: "Indiana",
    abbreviation: "IN",
  },
  {
    name: "Iowa",
    abbreviation: "IA",
  },
  {
    name: "Kansas",
    abbreviation: "KS",
  },
  {
    name: "Kentucky",
    abbreviation: "KY",
  },
  {
    name: "Louisiana",
    abbreviation: "LA",
  },
  {
    name: "Maine",
    abbreviation: "ME",
  },
  {
    name: "Marshall Islands",
    abbreviation: "MH",
  },
  {
    name: "Maryland",
    abbreviation: "MD",
  },
  {
    name: "Massachusetts",
    abbreviation: "MA",
  },
  {
    name: "Michigan",
    abbreviation: "MI",
  },
  {
    name: "Minnesota",
    abbreviation: "MN",
  },
  {
    name: "Mississippi",
    abbreviation: "MS",
  },
  {
    name: "Missouri",
    abbreviation: "MO",
  },
  {
    name: "Montana",
    abbreviation: "MT",
  },
  {
    name: "Nebraska",
    abbreviation: "NE",
  },
  {
    name: "Nevada",
    abbreviation: "NV",
  },
  {
    name: "New Hampshire",
    abbreviation: "NH",
  },
  {
    name: "New Jersey",
    abbreviation: "NJ",
  },
  {
    name: "New Mexico",
    abbreviation: "NM",
  },
  {
    name: "New York",
    abbreviation: "NY",
  },
  {
    name: "North Carolina",
    abbreviation: "NC",
  },
  {
    name: "North Dakota",
    abbreviation: "ND",
  },
  {
    name: "Northern Mariana Islands",
    abbreviation: "MP",
  },
  {
    name: "Ohio",
    abbreviation: "OH",
  },
  {
    name: "Oklahoma",
    abbreviation: "OK",
  },
  {
    name: "Oregon",
    abbreviation: "OR",
  },
  {
    name: "Palau",
    abbreviation: "PW",
  },
  {
    name: "Pennsylvania",
    abbreviation: "PA",
  },
  {
    name: "Puerto Rico",
    abbreviation: "PR",
  },
  {
    name: "Rhode Island",
    abbreviation: "RI",
  },
  {
    name: "South Carolina",
    abbreviation: "SC",
  },
  {
    name: "South Dakota",
    abbreviation: "SD",
  },
  {
    name: "Tennessee",
    abbreviation: "TN",
  },
  {
    name: "Texas",
    abbreviation: "TX",
  },
  {
    name: "Utah",
    abbreviation: "UT",
  },
  {
    name: "Vermont",
    abbreviation: "VT",
  },
  {
    name: "Virgin Islands",
    abbreviation: "VI",
  },
  {
    name: "Virginia",
    abbreviation: "VA",
  },
  {
    name: "Washington",
    abbreviation: "WA",
  },
  {
    name: "West Virginia",
    abbreviation: "WV",
  },
  {
    name: "Wisconsin",
    abbreviation: "WI",
  },
  {
    name: "Wyoming",
    abbreviation: "WY",
  },
];

export interface IPageSize {
  pageSize: number;
}

export const PageSize: IPageSize[] = [
  {pageSize: 5},
  {pageSize: 10},
  {pageSize: 25},
  {pageSize: 50},
  {pageSize: 5000},

]

export enum MLReferralStatusType {
  Draft = 1009,
  Pending = 1010,
  Overdue = 1011,
  InProgress= 1012,
  NotAccepted= 1013,
  Withdrawn= 1014,
  AdministrativelyClosed = 1015,
  AcceptedVoucherVerificationPending = 1016,
  AcceptedVoucherVerificationEligible = 1017,
  AcceptedVoucherVerificationInProgress = 1018,
  AcceptedVoucherVerificationOnHold = 1019,
  Rejected = 1020,
  MoveInPendingVerification = 1021,
  MoveInVerified = 1022,
  MoveInRejected = 1023,
  MoveOutPendingVerification = 1024,
  MoveOutVerified = 1025,
  MoveOutRejected = 1026
}

export enum InterviewTimeSlotDuration {
  durationInMin = 30
  /* in minutes, IMPORTANT, this has to match with the @TimeSlotDuration in STORED PROCEDURE [dbo].[uspVCSGetAvailableInterviewTimeSlots]
    60 % increment == 0 should be true while selecting this increment value.
  */
  /** Affected Functionalities by this value
   * 1. C2V Scheduler
   * 2. V2C Scheduler
   * 3. Referral Request Scheduler
   * 4. Interview Details Update from Referral Roster Draft/Transmitted/Pending
   * 5. Interview Outcome page (Interview Details)
   * 6. Standalone Scheduler (For Preferred Slots for HP)
   * 7. Calendar for Unit Roster
   */
}

export enum MLInterviewTimeSlotDuration {
  durationInMin = 30
  /* in minutes, IMPORTANT, this has to match with the @TimeSlotDuration in STORED PROCEDURE [dbo].[uspMLGetAvailableInterviewTimeSlots]
    60 % increment == 0 should be true while selecting this increment value.
  */
  /** Affected Functionalities by this value
   * 1. C2V Scheduler
   * 2. V2C Scheduler
   * 3. Referral Request Scheduler
   * 4. Interview Details Update from Referral Roster Draft/Transmitted/Pending
   * 5. Interview Outcome page (Interview Details)
   * 6. Standalone Scheduler (For Preferred Slots for HP)
   * 7. Calendar for Unit Roster
   */
}

export enum PECategories {
  ACS	= 1326,
  CUCS = 1327,
  HASA = 1328,
  HPD = 1329,
  OSAHS = 1330,
  SOMH = 1331
}

export enum HousingProgramType {
  RRH	= 1487,
  SH =	44
}

export enum ApplicationWorkflowType {
  SH_NewApp = 1,
  SH_PendingApp = 2,
  RRH_NewApp = 3,
  RRH_PendingApp = 4
}

export enum RRHProgramCategory {
  Cat1 = 1475,  //Category 1: Literally Homeless
  Cat2 = 1476,  //Category 2: Imminent Risk of Homelessness
  Cat4 = 1477   //Category 4: Fleeing/Attempting to Flee Domestic Violence
}

