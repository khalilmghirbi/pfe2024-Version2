import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InquiriesTableComponent } from './inquiries-table/inquiries-table.component';
import { InquiriesRoutingModule } from './Inquiries-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    InquiriesTableComponent
  ],
  imports: [
    CommonModule,
    InquiriesRoutingModule,
    SharedModule
  ]
})
export class InquiriesModule { }
