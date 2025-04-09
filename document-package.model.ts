export interface iDocumentPackage {
    pactDocumentID: number;
    documentType: number;
    capsReportID: string;
    documentTypeDescription: string;
    documentName: string;
    documentExtension: string;
    documentDescription: string;
    fileNetDocID: number;
    createdBy: number;
    createdByName: string;
    createdDateTime: string;
    clinicianName: string;
		clincianLicenseNumber: string;
		colloborationMDName: string;
		colloborationMDLicenseNumber: string;
		agencySite: string; 
    agencySiteName: string;
    clinicianTitleType?: string;
    evaluationDate?: string;
    collaboratingNYSLicensedClinicianTitleType?: string;
    formatedAgencySite?: string;
  }

  export interface iDocumentLink {
    linkURL: string;
  }