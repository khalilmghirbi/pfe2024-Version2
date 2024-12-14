import { InqueryStatus } from "../enums/inquery-status";

export interface Inquiry{
    Id: string;
    PatientName: string;
    MedicalProcedure: string;
    ReceptionDate: Date;
    AnswerDate: Date;
    CoordinatorName: string;
    CaseManagerName: string;
    Clinic: string;
    Country: string;
    Status: InqueryStatus;
    Age?: number;
    Sex?: string;
    DesiredCity?: string;
    Smoker?: boolean;
    NatibeLanguage?: string;
}
