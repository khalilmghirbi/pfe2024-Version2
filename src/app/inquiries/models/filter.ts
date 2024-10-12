export interface Filter {
    search?: string;
    dateRange?: DateRange;
    procedure?: string[];
    status?: string[];
    clinic?: string[];
    caseManager?: string[];
    country?: string[];
}

export interface DateRange {
    from?: Date;
    to?: Date;
}
