import { Component, Input } from '@angular/core';
import { Appointment } from '../models/appointment';
import { InqueryStatus } from '../enums/inquery-status';

@Component({
  selector: 'app-appointement',
  templateUrl: './appointement.component.html',
  styleUrls: ['./appointement.component.scss']
})
export class AppointementComponent {
  status = InqueryStatus;
@Input() appointement!: Appointment;
@Input() upComing!: boolean;

}
