import { ReviewStatus } from "../enum/review-status";

export interface Review {
    id: Number;
    receptionDate: Date;
    patientName: string;
    procedure: string;
    hospital: string;
    caseManager: string;
    message: string;
    rate: number;
    status: ReviewStatus;
    reply?:string;
}
