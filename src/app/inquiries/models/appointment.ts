import { InqueryStatus } from "../enums/inquery-status";

export interface Appointment {
    hospital: string;
    date: Date;
    status: InqueryStatus;
    payment: number;
    hotel: string;
}
