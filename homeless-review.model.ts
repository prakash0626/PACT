export interface iHomelessCounts {
    dataSource: string;
    past4Years?: number;
    past2Years?: number;
    past1Year182?: number;
    last120Days?: number;
    past1Year90?: number;
    last60Days?: number;
    clientName: string;
    clientNumber?: number;
    ssn: string;
    dob: string;
    currentlyInShelter: string;
    shelterCode: string;
    facilityName: string;
}

export interface iHomelessCountsInput {
    pactApplicationId?: number;
    optionUserId?: number;
}

export interface iHomeless1To4Years {
    currentlyHomelessOrigType?: number;
    currentlyHomelessType?: number;
    currentlyHomelessSource?: number;
    currentlyInDHSShelterOrigType?: number;
    currentlyInDHSShelterType?: number;
    currentlyInDHSShelterSource?: number;
    homeless2OfPast4YearsOrigType?: number;
    homeless2OfPast4YearsType?: number;
    homeless2OfPast4YearsSource?: number;
    homeless2OfPast4YearsCount?: number;
    homeless1OfPast2YearsOrigType?: number;
    homeless1OfPast2YearsType?: number;
    homeless1OfPast2YearsSource?: number;
    homeless1OfPast2YearsCount?: number;
    homeless6mOfPast1YearOrigType?: number;
    homeless6mOfPast1YearType?: number;
    homeless6mOfPast1YearSource?: number;
    homeless6mOfPast1YearCount?: number;
    homeless4mOfPast1YearOrigType?: number;
    homeless4mOfPast1YearType?: number;
    homeless4mOfPast1YearSource?: number;
    homeless4mOfPast1YearCount?: number;
    homeless90DaysOfPast1YearOrigType?: number;
    homeless90DaysOfPast1YearType?: number;
    homeless90DaysOfPast1YearSource?: number;
    homeless90DaysOfPast1YearCount?: number;
    homeless14OfPast60DaysOrigType?: number;
    homeless14OfPast60DaysType?: number;
    homeless14OfPast60DaysSource?: number;
    homeless14OfPast60DaysCount?: number;
    continuePriorIandIIEligibilityOrigType?: number;
    continuePriorIandIIEligibilityType?: number;
    continuePriorIandIIEligibilitySource?: number;
    homeless365daysOfPast1YearOrigType?: number;
    homeless365daysOfPast1YearSource?: number;
    homeless4EpisodesPast3YearsOrigType?: number;
    homeless4EpisodesPast3YearsSource?: number;
}

export interface iHomeless1To4YearsInput {
    pactApplicationId?: number;
    clientCategory?: number;
    optionUserId?: number;
}

export class SaveHomeless1To4Years {
    pactApplicationId?: number;
    clientCategory?: number;
    currentlyHomelessType?: number;
    currentlyHomelessSource?: number;
    currentlyInDHSShelterType?: number;
    currentlyInDHSShelterSource?: number;
    homeless2OfPast4YearsType?: number;
    homeless2OfPast4YearsSource?: number;
    homeless1OfPast2YearsType?: number;
    homeless1OfPast2YearsSource?: number;
    homeless6mOfPast1YearType?: number;
    homeless6mOfPast1YearSource?: number;
    homeless4mOfPast1YearType?: number;
    homeless4mOfPast1YearSource?: number;
    homeless90DaysOfPast1YearType?: number;
    homeless90DaysOfPast1YearSource?: number;
    homeless14OfPast60DaysType?: number;
    homeless14OfPast60DaysSource?: number;
    continuePriorIandIIEligibilityType?: number;
    continuePriorIandIIEligibilitySource?: number;
    optionUserId?: number;
}

export interface iResidentialTreatmentHistoryInput {
    pactApplicationId?: number;
    clientCategory?: number;
    optionUserId?: number;
}

export interface iResidentialTreatmentHistory {
    incarceratedOrigType?: number;
    incarceratedType?: number;
    incarceratedSource?: number;
    yaCurrentlyIncarceratedOrigType?: number;
    yaCurrentlyIncarceratedType?: number;
    yaCurrentlyIncarceratedSource?: number;
    psychiatricallyHospitalizedOrigType?: number;
    psychiatricallyHospitalizedType?: number;
    psychiatricallyHospitalizedSource?: number;
    currentlyInNYSPsychiatricCenterOrigType?: number;
    currentlyInNYSPsychiatricCenterType?: number;
    currentlyInNYSPsychiatricCenterSource?: number;
    historyOfTreatmentInNYSRTFStatePFOrigType?: number;
    historyOfTreatmentInNYSRTFStatePFType?: number;
    historyOfTreatmentInNYSRTFStatePFSource?: number;
    leavingFosterCareOrigType?: number;
    leavingFosterCareType?: number;
    leavingFosterCareSource?: number;
    inFCfor5YearsAfterAge16OrigType?: number;
    inFCfor5YearsAfterAge16Type?: number;
    inFCfor5YearsAfterAge16Source?: number;
    receivingSUDTreatmentOrigType?: number;
    receivingSUDTreatmentType?: number;
    receivingSUDTreatmentSource?: number;
    inCRSROAPTTreatmentProgramOrigType?: number;
    inCRSROAPTTreatmentProgramType?: number;
    inCRSROAPTTreatmentProgramSource?: number;
    inSkilledNursingFacilityOrigType?: number;
    inSkilledNursingFacilityType?: number;
    inSkilledNursingFacilitySource?: number;
    inChildrensCommunityResidenceOrigType?: number;
    inChildrensCommunityResidenceType?: number;
    inChildrensCommunityResidenceSource?: number;
    canReturnToPriorResidenceOrigType?: number;
    canReturnToPriorResidenceType?: number;
    canReturnToPriorResidenceSource?: number;
    requiresSupportiveServicesOrigType?: number;
    requiresSupportiveServicesType?: number;
    requiresSupportiveServicesSource?: number;
    appearsRiskOfHomelessOrigType?: number;
    appearsRiskOfHomelessType?: number;
    appearsRiskOfHomelessSource?: number;
    currentResidenceOrigType?: number;
    currentResidenceType?: number;
    currentResidenceSource?: number;
    intensiveHousingOrigType?: number;
    intensiveHousingType?: number;
    intensiveHousingSource?: number;
}

export class SaveResidentialTreatmentHistory {
    pactApplicationId?: number;
    clientCategory?: number;
    incarceratedType?: number;
    incarceratedSource?: number;
    yaCurrentlyIncarceratedType?: number;
    yaCurrentlyIncarceratedSource?: number;
    psychiatricallyHospitalizedType?: number;
    psychiatricallyHospitalizedSource?: number;
    historyOfTreatmentInNYSRTFStatePFType?: number;
    historyOfTreatmentInNYSRTFStatePFSource?: number;
    leavingFosterCareType?: number;
    leavingFosterCareSource?: number;
    inFCfor5YearsAfterAge16Type?: number;
    inFCfor5YearsAfterAge16Source?: number;
    receivingSUDTreatmentType?: number;
    receivingSUDTreatmentSource?: number;
    inCRSROAPTTreatmentProgramType?: number;
    inCRSROAPTTreatmentProgramSource?: number;
    inSkilledNursingFacilityType?: number;
    inSkilledNursingFacilitySource?: number;
    inChildrensCommunityResidenceType?: number;
    inChildrensCommunityResidenceSource?: number;
    appearsRiskOfHomelessType?: number;
    appearsRiskOfHomelessSource?: number;
    currentResidenceType?: number;
    currentResidenceSource?: number;
    intensiveHousingType?: number;
    intensiveHousingSource?: number;
    optionUserId?: number;
}

export interface iHomelessAtRiskInput {
    pactApplicationId?: number;
    clientCategory?: number;
    optionUserId?: number;
}

export class HomelessAtRisk {
    hasFrequentMovesPast1YearOrigType?: number;
    hasFrequentMovesPast1YearType?: number;
    hasFrequentMovesPast1YearSource?: number;
    haveLimitedEducationOrigType?: number;
    haveLimitedEducationType?: number;
    haveLimitedEducationSource?: number;
    haveLimitedEducationDescription: string;
    haveLimitedEmpHistoryOrigType?: number;
    haveLimitedEmpHistoryType?: number;
    haveLimitedEmpHistorySource?: number;
    haveLimitedEmpHistoryDescription: string;
    yaWithChildrenOrigType?: number;
    yaWithChildrenType?: number;
    yaWithChildrenSource?: number;
    yaWithChildrenDescription: string;
    shelterStayInPast24MonthsOrigType?: number;
    shelterStayInPast24MonthsType?: number;
    shelterStayInPast24MonthsSource?: number;
    isVictimOfDVInPast24MonthsOrigType?: number;
    isVictimOfDVInPast24MonthsType?: number;
    isVictimOfDVInPast24MonthsSource?: number;
    isVictimOfDVInPast24MonthsDescription: string;
    otherCriteriaForHomelessOrigType?: number;
    otherCriteriaForHomelessType?: number;
    otherCriteriaForHomelessSource?: number;
    explain: string;
}

export class SaveHomelessAtRisk {
    pactApplicationId?: number;
    clientCategory?: number;
    hasFrequentMovesPast1YearOrigType: number;
    hasFrequentMovesPast1YearType?: number;
    hasFrequentMovesPast1YearSource?: number;
    haveLimitedEducationOrigType?: number;
    haveLimitedEducationType?: number;
    haveLimitedEducationSource?: number;
    haveLimitedEmpHistoryOrigType?: number;
    haveLimitedEmpHistoryType?: number;
    haveLimitedEmpHistorySource?: number;
    yaWithChildrenOrigType?: number;
    yaWithChildrenType?: number;
    yaWithChildrenSource?: number;
    shelterStayInPast24MonthsOrigType?: number;
    shelterStayInPast24MonthsType?: number;
    shelterStayInPast24MonthsSource?: number;
    isVictimOfDVInPast24MonthsOrigType?: number;
    isVictimOfDVInPast24MonthsType?: number;
    isVictimOfDVInPast24MonthsSource?: number;
    otherCriteriaForHomelessOrigType?: number;
    otherCriteriaForHomelessType?: number;
    otherCriteriaForHomelessSource?: number;
    explain: string;
    optionUserId?: number;
}

export class HeadOfHousehold {
    haveLimitedEducationOrigType?: number;
    haveLimitedEducationType?: number;
    haveLimitedEducationSource?: number;
    haveLimitedEducationDescription: string;
    haveLimitedEmpHistoryOrigType?: number;
    haveLimitedEmpHistoryType?: number;
    haveLimitedEmpHistorySource?: number;
    haveLimitedEmpHistoryDescription: string;
    yaWithChildrenOrigType?: number;
    yaWithChildrenType?: number;
    yaWithChildrenSource?: number;
    yaWithChildrenDescription: string;
    shelterStayInPast24MonthsOrigType?: number;
    shelterStayInPast24MonthsType?: number;
    shelterStayInPast24MonthsSource?: number;
    isVictimOfDVInPast24MonthsOrigType?: number;
    isVictimOfDVInPast24MonthsType?: number;
    isVictimOfDVInPast24MonthsSource?: number;
    isVictimOfDVInPast24MonthsDescription: string;
}

export interface iHeadOfHouseholdInput {
    pactApplicationId?: number;
    optionUserId?: number;
}