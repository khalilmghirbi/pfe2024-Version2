import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'inquiries',
    pathMatch: 'full'
  },
  {
    path: 'inquiries',
    loadChildren: () => import('./inquiries/inquiries.module').then(m => m.InquiriesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
