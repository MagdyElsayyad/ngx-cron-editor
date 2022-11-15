export interface CronOptions {
    formInputClass?: string;
    formSelectClass?: string;
    formRadioClass?: string;
    formCheckboxClass?: string;

    defaultTime: string,

    hideMinutesTab: boolean;
    hideHourlyTab: boolean;
    hideDailyTab: boolean;
    hideWeeklyTab: boolean;
    hideMonthlyTab: boolean;
    hideYearlyTab: boolean;
    hideAdvancedTab: boolean;
    hideSpecificWeekDayTab: boolean;
    hideSpecificMonthWeekTab: boolean;

    use24HourTime: boolean;
    hideSeconds: boolean;

    cronFlavor: string;
    translations?: {
        every: string;
        day: string;
        days: string;
        at: string;
        weekDayMonAndFri: string;
        weekDays: {
            monday: string;
            tuesday: string;
            wednesday: string;
            thursday: string;
            friday: string;
            saturday: string;
            sunday: string;
        };
        atTime: string;
        onThe: string;
        ofEvery: string;
        of: string;
        expression: string;
        hour: string;
        minute: string;
        minutes: string;
        second: string;
        seconds: string;
        am: string;
        pm: string;
        hourly: string;
        daily: string;
        weekly: string;
        monthly: string;
        yearly: string;
    }
}
