export interface Appointment {
    id: string,
    hospital: string;
    date: Date;
    status: AppointmentStatus;
    payment: number;
    hotel: string;
}

export enum AppointmentStatus {
    New = "new",
    InProgress = "inProgress",
    Confirmed = "confirmed",
    Rejected = "rejected"
}


