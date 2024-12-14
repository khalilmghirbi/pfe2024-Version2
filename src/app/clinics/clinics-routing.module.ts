import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { MediaComponent } from './media/media.component';
import { TreatmentsComponent } from './treatments/treatments.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { HotelsComponent } from './hotels/hotels.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ClinicComponent } from './clinic/clinic.component';
import { CaseManagersComponent } from './case-managers/case-managers.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: ':id',
    pathMatch: 'full',
  },
  {
    path: ':id',
    component: ClinicComponent,
    children: [
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full',
      },
      { path: 'profile', component: ProfileComponent },
      { path: 'media', component: MediaComponent },
      { path: 'treatments', component: TreatmentsComponent },
      { path: 'doctors', component: DoctorsComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: 'case-manager', component: CaseManagersComponent },
      { path: 'hotels', component: HotelsComponent },
      { path: 'reviews', component: ReviewsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClinicsRoutingModule {}
