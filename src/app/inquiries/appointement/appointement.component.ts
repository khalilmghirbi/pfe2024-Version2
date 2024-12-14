import { Component, Input } from '@angular/core';
import { Appointment, AppointmentStatus } from '../models/appointment';
import { InqueryStatus } from '../enums/inquery-status';

@Component({
  selector: 'app-appointement',
  templateUrl: './appointement.component.html',
  styleUrls: ['./appointement.component.scss']
})
export class AppointementComponent {
status = AppointmentStatus;
@Input() appointement!: Appointment;
@Input() upComing!: boolean;

getStatusClass(appointement: Appointment): string {
  switch (appointement.status) {
    case this.status.New:
      return 'grey-bg';
    case this.status.InProgress:
      return 'warn-bg';
    case this.status.Closed:
      return 'success-bg';
    case this.status.Rejected:
      return 'critical-bg';
    default:
      return '';
  }
}

}
