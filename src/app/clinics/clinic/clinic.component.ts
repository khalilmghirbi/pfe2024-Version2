import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.scss']
})
export class ClinicComponent {
  titles = ['profile', 'media', 'treatments', 'doctors', 'notifications', 'hotels', 'reviews'];

  /**
   *
   */
  constructor(private router: Router, private route: ActivatedRoute) {
    
  }

  onTabChange(event: any) {
    const selectedTabIndex = event.index;
    const selectedTitle = this.titles[selectedTabIndex];
    this.router.navigate([selectedTitle] , { relativeTo: this.route });
  }
}
