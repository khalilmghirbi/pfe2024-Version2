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



@NgModule({
  declarations: [
    MediaComponent,
    TreatmentsComponent,
    DoctorsComponent,
    NotificationsComponent,
    CaseManagersComponent,
    HotelsComponent,
    ReviewsComponent
  ],
  imports: [
    CommonModule,
    ClinicsRoutingModule
  ]
})
export class ClinicsModule { }
