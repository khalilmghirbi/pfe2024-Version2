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
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ClinicsRoutingModule,
    SharedModule
  ]
})
export class ClinicsModule { }
