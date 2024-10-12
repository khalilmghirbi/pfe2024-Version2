import { Component } from '@angular/core';
import { NavItem } from '../../models/nav-item';
import { ResponsiveService } from '../../services/responsive.service';
import { map, Observable } from 'rxjs';
import { Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-sidenav-drawer',
  templateUrl: './sidenav-drawer.component.html',
  styleUrls: ['./sidenav-drawer.component.scss'],
})
export class SidenavDrawerComponent {
  navItems: NavItem[] = [
    {
      title: 'Inquiries',
      icon: 'move_to_inbox',
      route: 'inquiries',
    },
    {
      title: 'Messages',
      icon: 'mail',
      route: 'messages',
    },
    {
      title: 'Reviews',
      icon: 'rate_review',
      route: 'reviews',
    },
    {
      title: 'Statistics',
      icon: 'query_stats',
      route: 'statistics',
    },
    {
      title: 'Users',
      icon: 'person',
      route: 'users',
    },
    {
      title: 'Clinics',
      icon: 'local_hospital',
      route: 'clinics',
    }
  ];

  showLabel$!: Observable<boolean>;
  constructor(public responsiveService:ResponsiveService) {
    this.showLabel$ = this.responsiveService.currentBreakpoint.
    pipe(
      map(breakpoint => breakpoint !== Breakpoints.Small && breakpoint !== Breakpoints.XSmall)
    );
  }
}
