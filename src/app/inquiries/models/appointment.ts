export interface Appointment {
    hospital: string;
    date: Date;
    status: AppointmentStatus;
    payment: number;
    hotel: string;
}

export enum AppointmentStatus {
    New = "new",
    InProgress = "inProgress",
    Closed = "closed",
    Rejected = "rejected"
}


