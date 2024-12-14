import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './shared/guards/auth.guard';
import { LoginComponent } from './shared/components/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [authGuard]
  },
  {
    path:'',
    redirectTo:'inquiries',
    pathMatch: 'full'
  },
  {
    path: 'inquiries',
    loadChildren: () => import('./inquiries/inquiries.module').then(m => m.InquiriesModule),
    canActivate: [authGuard]
  },
  {
    path: 'messages',
    loadChildren: () => import('./messages/messages.module').then(m => m.MessagesModule),
    canActivate: [authGuard]
  },
  {
    path: 'reviews',
    loadChildren: () => import('./reviews/reviews.module').then(m => m.ReviewsModule),
    canActivate: [authGuard]
  },
  {
    path: 'statistics',
    loadChildren: () => import('./statistics/statistics.module').then(m => m.StatisticsModule),
    canActivate: [authGuard]
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
    canActivate: [authGuard]
  },
  {
    path: 'clinics',
    loadChildren: () => import('./clinics/clinics.module').then(m => m.ClinicsModule),
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
