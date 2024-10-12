import { Component } from '@angular/core';
import { InquiriesService } from '../services/inquiries.service';
import { Observable } from 'rxjs';
import { Kpi } from '../models/kpi';

@Component({
  selector: 'app-inquiries',
  templateUrl: './inquiries.component.html',
  styleUrls: ['./inquiries.component.scss'],
})
export class InquiriesComponent {
  kpis$!: Observable<Kpi>;
  constructor(public inquiriesService: InquiriesService) {}

  ngOnInit() {
    this.kpis$ = this.inquiriesService.getKpis();
  }
}
