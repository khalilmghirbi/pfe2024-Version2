import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InquiriesTableComponent } from './inquiries-table/inquiries-table.component';
import { InquiriesRoutingModule } from './Inquiries-routing.module';
import { SharedModule } from '../shared/shared.module';
import { InquiriesComponent } from './inquiries/inquiries.component';
import { InquiriesFilterComponent } from './inquiries-filter/inquiries-filter.component';
import { InquiriesStatsComponent } from './inquiries-stats/inquiries-stats.component';
import { InquiriesStatCardComponent } from './inquiries-stat-card/inquiries-stat-card.component';
import { InquiriesCardsComponent } from './inquiries-cards/inquiries-cards.component';



@NgModule({
  declarations: [
    InquiriesTableComponent,
    InquiriesComponent,
    InquiriesFilterComponent,
    InquiriesStatsComponent,
    InquiriesStatCardComponent,
    InquiriesCardsComponent
  ],
  imports: [
    CommonModule,
    InquiriesRoutingModule,
    SharedModule
  ]
})
export class InquiriesModule { }
