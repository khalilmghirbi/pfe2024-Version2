import { Component, Input } from '@angular/core';
import { NavItem } from '../../models/nav-item';
import { map, Observable } from 'rxjs';
import { ResponsiveService } from '../../services/responsive.service';
import { Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-sidenav-menu-item',
  templateUrl: './sidenav-menu-item.component.html',
  styleUrls: ['./sidenav-menu-item.component.scss'],
})
export class SidenavMenuItemComponent {
  @Input() navItem!: NavItem;
  showLabel$!: Observable<boolean>;
  expanded = true;
  /**
   *
   */
  constructor(public responsiveService: ResponsiveService) {
    this.showLabel$ = this.responsiveService.currentBreakpoint.pipe(
      map(
        (breakpoint) =>
          breakpoint !== Breakpoints.Small && breakpoint !== Breakpoints.XSmall
      )
    );
  }

  toggleExpanded(): void {
    this.expanded = !this.expanded;
  }

  public get expandable(): boolean {
    return (
      this.navItem.subItems !== undefined && this.navItem.subItems.length > 0
    );
  }
}
