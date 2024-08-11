import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InquiriesTableComponent } from './inquiries-table/inquiries-table.component';

const routes: Routes = [
  { path: '',  component: InquiriesTableComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InquiriesRoutingModule { }
