import { InqueryStatus } from "../enums/inquery-status";

export interface Inquiry {
    PatientName: string;
    MedicalProcedure: string;
    ReceptionDate: Date;
    AnswerDate: Date;
    CoordinatorName: string;
    CaseManagerName: string;
    Status: InqueryStatus;
}
