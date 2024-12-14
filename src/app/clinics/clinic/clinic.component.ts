import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, Subscription } from 'rxjs';
import { ClinicService } from 'src/app/shared/services/clinic.service';

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.scss'],
})
export class ClinicComponent implements OnInit,AfterViewInit {
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
  subscription!: Subscription;
  hopitalId!: number;

  /**
   *
   */
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private clinicService: ClinicService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(
      (param)=>{
        this.clinicService.selectClinic(+param['id']);
      }
    )
  }

  ngAfterViewInit(): void {
    // Get the last segment from the route
    this.selectedIndex = localStorage.getItem('indexId')
      ? parseInt(localStorage.getItem('indexId') as string)
      : 0;
    this.cdr.detectChanges();
  }

  onTabChange(event: any) {
    const selectedTabIndex = event.index;
    const selectedTitle = this.titles[selectedTabIndex];
    localStorage.setItem('indexId', selectedTabIndex);
    this.router.navigate([selectedTitle], { relativeTo: this.route});
  }
}
