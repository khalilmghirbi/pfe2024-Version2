import { Component, Input } from '@angular/core';
import { KpiStatus } from '../enums/kpi-status';

@Component({
  selector: 'app-inquiries-stat-card',
  templateUrl: './inquiries-stat-card.component.html',
  styleUrls: ['./inquiries-stat-card.component.scss']
})
export class InquiriesStatCardComponent {

  @Input() title: string = '';
  @Input() value: string | number = '';
  @Input() status!: KpiStatus;

}
