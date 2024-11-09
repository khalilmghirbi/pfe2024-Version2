import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicsRoutingModule } from './clinics-routing.module';
import { MediaComponent } from './media/media.component';
import { TreatmentsComponent } from './treatments/treatments.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { CaseManagersComponent } from './case-managers/case-managers.component';
import { HotelsComponent } from './hotels/hotels.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ClinicComponent } from './clinic/clinic.component';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { AddProcedureDialogComponent } from './add-procedure-dialog/add-procedure-dialog.component';
import { AddDoctorDialogComponent } from './add-doctor-dialog/add-doctor-dialog.component';
import { AddContactDialogComponent } from './add-contact-dialog/add-contact-dialog.component';
import { AddHotelDialogComponent } from './add-hotel-dialog/add-hotel-dialog.component';
import { AddCaseManagerDialogComponent } from './add-case-manager-dialog/add-case-manager-dialog.component';



@NgModule({
  declarations: [
    MediaComponent,
    TreatmentsComponent,
    DoctorsComponent,
    NotificationsComponent,
    CaseManagersComponent,
    HotelsComponent,
    ReviewsComponent,
    ClinicComponent,
    ProfileComponent,
    AddProcedureDialogComponent,
    AddDoctorDialogComponent,
    AddContactDialogComponent,
    AddHotelDialogComponent,
    AddCaseManagerDialogComponent
  ],
  imports: [
    CommonModule,
    ClinicsRoutingModule,
    SharedModule
  ]
})
export class ClinicsModule { }
