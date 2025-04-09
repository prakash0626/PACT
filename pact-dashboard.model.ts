// export class UserStats {
//     stats: StatsList[];
// }

export class StatsList {
    header: string;
    stats: StatsValue[];
}

export class StatsValue {
    id: number;
    statTitle: string;
    statValue: number;
}

export class AppNotification {
    appNotificationID?: number;
    notificationTitle?: string;
    notificationMessage?: string;
    notificationLongMessage?: string;
    isAlert?: boolean;
    isAlertDisplayOnce?: boolean;
    isPopup?: boolean;
    isPopupDisplayOnce?: boolean;
    isAnnouncement?: boolean;
    sortOrder?: number;
    startDate?: string;
    endDate?: string;
    ModuleType?: string;
    userID?: number;
}

export class ApplicationNotifications {
    appAnnouncement: AppNotification[];
    appAlert: AppNotification[];
    appPopup: AppNotification[];
}

export class AppNotificationInputParams {
    optionUserId: number;
    moduleType: string;
}
export class UserStatsInputParams {
    optionUserId: number;
    siteID: number;
}

declare global {
    interface Document {
        documentMode?: any;
    }
}

export class PACTCAPSHandhakeParams {
    lanId: string;
    target: number;
}
