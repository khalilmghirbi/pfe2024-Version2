import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavItem } from '../../models/nav-item';
import { filter, Observable, pipe, Subscription, switchMap } from 'rxjs';
import { ClinicService } from 'src/app/shared/services/clinic.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidenav-drawer',
  templateUrl: './sidenav-drawer.component.html',
  styleUrls: ['./sidenav-drawer.component.scss'],
})
export class SidenavDrawerComponent implements OnInit, OnDestroy {
  susbcription!: Subscription;
  navItems: NavItem[] = [
    {
      title: 'Inquiries',
      icon: 'move_to_inbox',
      route: 'inquiries',
    },
    {
      title: 'Reviews',
      icon: 'rate_review',
      route: 'reviews',
    },
    {
      title: 'Users',
      icon: 'person',
      route: 'users',
    },
  ];

  showLabel$!: Observable<boolean>;
  constructor(
    private clinicService: ClinicService,
    private authService: AuthService
  ) {}

  ngOnDestroy(): void {
    this.susbcription?.unsubscribe();
  }

  ngOnInit(): void {
    this.authService.userDetail$.pipe(
      filter((userDetail) => !!userDetail),
      switchMap((userDetail) => {
        return this.clinicService.getClinics(userDetail?.id_user || 0);
      }
    )).subscribe((clinics) => {
      this.navItems.push({
        title: 'Clinics',
        icon: 'local_hospital',
        route: 'clinics',
        subItems: clinics.map((clinic) => {
          return {
            title: clinic.name,
            route: 'clinics/' + clinic.id,
          };
        }),
      });
    });;
  }
}
