import { ReviewStatus } from "../enum/review-status";

export interface Review {
    id: Number;
    receptionDate: Date;
    patienName: string;
    procedure: string;
    hospital: string;
    caseManger: string;
    message: string;
    rate: number;
    status: ReviewStatus;
}
