import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { InquiriesService } from '../services/inquiries.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Appointment } from '../models/appointment';
import { InqueryStatus } from '../enums/inquery-status';

@Component({
  selector: 'app-appointement-dialog',
  templateUrl: './appointement-dialog.component.html',
  styleUrls: ['./appointement-dialog.component.scss'],
})
export class AppointementDialogComponent {
  appointmentsInProgress: BehaviorSubject<Appointment[]> = new BehaviorSubject<
    Appointment[]
  >([]);
  appointmentsPassed: BehaviorSubject<Appointment[]> = new BehaviorSubject<
    Appointment[]
  >([]);
  constructor(
    public inquiriesService: InquiriesService,
    public dialogRef: MatDialogRef<AppointementDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {
    this.inquiriesService.getAppointments(data).subscribe((appointments) => {
      this.appointmentsInProgress.next(
        appointments.filter(
          (appointment) =>
            appointment.status === InqueryStatus.InProgress ||
            appointment.status === InqueryStatus.Pending ||
            appointment.status === InqueryStatus.New
        )
      );
      this.appointmentsPassed.next(
        appointments.filter(
          (appointment) =>
            appointment.status === InqueryStatus.Closed ||
            appointment.status === InqueryStatus.Rejected
        )
      );
    });
  }

  get appointmentsInProgress$(): Observable<Appointment[]> {
    return this.appointmentsInProgress.asObservable();
  }

  get appointmentsPassed$(): Observable<Appointment[]> {
    return this.appointmentsPassed.asObservable();
  }

  get appointmentsInProgressValue(): Appointment[] {
    return this.appointmentsInProgress.value;
  }

  get appointmentsPassedValue(): Appointment[] {
    return this.appointmentsPassed.value;
  }

  ngOnInit(): void {}
}
