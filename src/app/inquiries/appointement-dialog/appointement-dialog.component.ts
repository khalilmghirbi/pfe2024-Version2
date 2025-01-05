import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { InquiriesService } from '../services/inquiries.service';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { Appointment, AppointmentStatus } from '../models/appointment';

@Component({
  selector: 'app-appointement-dialog',
  templateUrl: './appointement-dialog.component.html',
  styleUrls: ['./appointement-dialog.component.scss'],
})
export class AppointementDialogComponent {
  inquiryId!: string;
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
    this.inquiryId = data;
    this.fetchRdv();
  }

  fetchRdv(){
    this.inquiriesService.getAppointments(this.inquiryId).subscribe((appointments) => {
      const rdvs = this.GetUniqueAppointment(appointments)
      this.appointmentsInProgress.next(
        rdvs.filter(
          (appointment) =>
            appointment.status === AppointmentStatus.InProgress ||
            appointment.status === AppointmentStatus.New
        )
      );

      this.appointmentsPassed.next(
        rdvs.filter(
          (appointment) =>
            appointment.status === AppointmentStatus.Confirmed ||
            appointment.status === AppointmentStatus.Rejected
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

  ngOnInit(): void { }

  handleStatusChange(accept: boolean, appointement: Appointment) {
    this.inquiriesService.UpdateRdv(appointement.id, {
      ...appointement,
      status: accept ? AppointmentStatus.Confirmed : AppointmentStatus.Rejected
    }).subscribe(() =>{
      this.fetchRdv()
    })
  }

  GetUniqueAppointment(appointments: Appointment[]) : Appointment[] {
    const map = new Map();
    appointments.forEach(appointment => {
      if (!map.has(appointment.id)) {
        map.set(appointment.id, appointment);
      }
    });
    return Array.from(map.values());
  };
}
