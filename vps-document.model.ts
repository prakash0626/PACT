export interface vpsDocument{
  clientDocumentID?:Number;
  fileNetDocID?:Number;
  clientID?: Number;
  referralDate?: Date;
  docType?: number;
  docTypeDescription?: string;
  docName?: string;
  docExt?:string;
  docDesc?: string;
  docDated?: string;
  isVPSPactDoc?: Number;
  decisionNo?: Number;
  referralDecisionID?:Number;
}

export interface iVPSClientData {
  vpsClientID: number;
  firstName: string;
  lastName: string;
  name: string;
  ssn: string;
  dob: string;
  genderType: number;
  genderTypeDescription: string;
  cin: string;
};

export interface iVPSReferralHistory {
  clientID: number;
  referralDate:Date;
  scheduleDesc:string;
  decisionNo: number;
  referralDecisionDesc:string;
  appointmentDate:string;
  appointmentTime:string;
  //aMorPM:string;
  clinicianName:string;
  OutcomeTypeDesc: string;
  note:boolean;
  addendum:boolean;
  caseStatus:boolean; 
  maxDecisionNo:number;
  vpsReferralDecisionID: number;
}

export interface iDocumentLink {
  linkURL: string;
}

export interface ClientReferralModel {
  clientID:number;
  referralDate?:string;
  referralDescionNo?:number;
  vpsReferralDecisionID?:number;
  }

export class AgencyRecipients {
  agencyNo: string;
  agencyCode: string;
  agencyName: string;
  code: string;
  recipient: string;
  email: string;
  siteName: string;
}

export class EmailDocumentDetails {
  clientID: number;
  refDate: string;
  decisionNumber: number;
  refDecision?: number;
  addendumNo?: number;
  documentName: string;
  reportType?: number;
  preparedBy: string;
  clientName: string;
  vpsClientDocumentID: number;
}

export class Email {
  toList: string[];
  ccList: string[];
  bccList: string[];
  senderEmail: string;
  sentBy: number;
  subject: string;
  messageBody: string;
  filePath: string;
  fileName: string;
  referral: EmailDocumentDetails;
  userName?: string;
}

export interface vpsDocumentModel {
  vpsClientDocumentID?: number;
  vpsClientSearchAuditID?: number;    
  vpsReferralRequestID?: number;
  vpsReferralDecisionID?: number;
  fileNetDocID?: number;
  docType?: number;
  docTypeDescription?: string;
  vpsFile?: File;
  docName?: string;
  docExtension?: string;
  docDescription?: string;
  attachedDate?: string;
  attachedTime?: string;      
  attachedBy?: string;      
  createdBy: string;       
  updatedBy: string;     
  readOnly?: boolean;
  isSignOff?: boolean;
  isVisibleToReferralAgency?: boolean;
  userType?: number;
}