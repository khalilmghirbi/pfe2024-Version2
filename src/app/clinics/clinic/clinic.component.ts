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
        this.selectedIndex = 0;
      }
    )
  }

  ngAfterViewInit(): void {
    // Get the last segment from the route
    this.cdr.detectChanges();
  }

  onTabChange(event: any) {
    this.selectedIndex = event.index;
    const selectedTitle = this.titles[this.selectedIndex];
    this.router.navigate([selectedTitle], { relativeTo: this.route});
  }
}
