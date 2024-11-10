import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.scss'],
})
export class ClinicComponent implements AfterViewInit {
  titles = [
    'profile',
    'media',
    'treatments',
    'doctors',
    'notifications',
    'case-manager',
    'hotels',
    'reviews',
  ];
  selectedIndex = 0;

  /**
   *
   */
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}
  ngAfterViewInit(): void {
    // Get the last segment from the route
    this.selectedIndex = localStorage.getItem('indexId')
      ? parseInt(localStorage.getItem('indexId') as string)
      : 0;
    console.log(this.selectedIndex);
    this.cdr.detectChanges();
  }

  onTabChange(event: any) {
    const selectedTabIndex = event.index;
    const selectedTitle = this.titles[selectedTabIndex];
    localStorage.setItem('indexId', selectedTabIndex);
    this.router.navigate([selectedTitle], { relativeTo: this.route });
  }
}
