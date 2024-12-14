import { Component, Input } from '@angular/core';
import { Kpi } from '../models/kpi';
import { KpiStatus } from '../enums/kpi-status';

interface DisplayKpi {
  title: string;
  value: number | string;
  status: KpiStatus;
}

@Component({
  selector: 'app-inquiries-stats',
  templateUrl: './inquiries-stats.component.html',
  styleUrls: ['./inquiries-stats.component.scss'],
})
export class InquiriesStatsComponent {
  constructor() {}
  @Input() kpi!: Kpi | null;

  public get Kpis(): DisplayKpi[] {
    return [
      {
        title: 'Quoted Rate',
        value: this.kpi?.QuatedRate ?? 0,
        status: this.getRateStatus(this.kpi?.QuatedRate ?? 0, 70, 40),
      },
      {
        title: 'Response Time',
        value: this.kpi?.ResponseTime ?? 0,
        status: this.getRateStatus(this.kpi?.ResponseTime ?? 0, 80, 20),
      },
      {
        title: 'Waiting Confirmation',
        value: this.kpi?.WaitingConfirmation ?? 0,
        status: this.getRateStatus(
          this.kpi?.WaitingConfirmation ?? 0, 60, 30
        ),
      },
    ];
  }

  private getRateStatus(rate: number, succesLimit:number, warnLimit:number): KpiStatus {
    if (rate < succesLimit) {
      return KpiStatus.Critical;
    } else if (rate < warnLimit) {
      return KpiStatus.Warning;
    } else {
      return KpiStatus.Success;
    }
  }
}
