import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InquiriesTableComponent } from './inquiries-table/inquiries-table.component';
import { InquiriesRoutingModule } from './Inquiries-routing.module';
import { SharedModule } from '../shared/shared.module';
import { InquiriesComponent } from './inquiries/inquiries.component';
import { InquiriesStatsComponent } from './inquiries-stats/inquiries-stats.component';
import { InquiriesStatCardComponent } from './inquiries-stat-card/inquiries-stat-card.component';
import { InquiriesCardsComponent } from './inquiries-cards/inquiries-cards.component';
import { InquiriesFilterComponent } from './inquiries-filter/inquiries-filter.component';
import { AdvancedFilterDialogComponent } from './advanced-filter-dialog/advanced-filter-dialog.component';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';
import { AppointementDialogComponent } from './appointement-dialog/appointement-dialog.component';
import { AppointementComponent } from './appointement/appointement.component';


@NgModule({
  declarations: [
    InquiriesTableComponent,
    InquiriesComponent,
    InquiriesStatsComponent,
    InquiriesStatCardComponent,
    InquiriesCardsComponent,
    InquiriesFilterComponent,
    AdvancedFilterDialogComponent,
    InfoDialogComponent,
    AppointementDialogComponent,
    AppointementComponent
  ],
  imports: [
    CommonModule,
    InquiriesRoutingModule,
    SharedModule
  ]
})
export class InquiriesModule { }
