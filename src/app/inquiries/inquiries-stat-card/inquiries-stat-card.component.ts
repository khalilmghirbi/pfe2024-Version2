import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inquiries-stat-card',
  templateUrl: './inquiries-stat-card.component.html',
  styleUrls: ['./inquiries-stat-card.component.scss']
})
export class InquiriesStatCardComponent {

  @Input() title: string = '';
  @Input() status: string = '';

}
