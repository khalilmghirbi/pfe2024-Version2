import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersTableComponent } from './users-table/users-table.component';
import { SharedModule } from '../shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';
import { UpdateUserDialogComponent } from './update-user-dialog/update-user-dialog.component';


@NgModule({
  declarations: [
    UsersTableComponent,
    UpdateUserDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
