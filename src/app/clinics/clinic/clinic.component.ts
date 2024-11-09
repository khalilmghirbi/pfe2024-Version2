import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.scss']
})
export class ClinicComponent implements OnInit {
  titles = ['profile', 'media', 'treatments', 'doctors', 'notifications', 'case-manager', 'hotels', 'reviews'];
  selectedIndex = 0;

  /**
   *
   */
  constructor(private router: Router, private route: ActivatedRoute) {
    
  }
  ngOnInit(): void {
    // Get the last segment from the route
    this.selectedIndex = localStorage.getItem('indexId') ? parseInt(localStorage.getItem('indexId') as string) : 0;
  }

  onTabChange(event: any) {
    const selectedTabIndex = event.index;
    const selectedTitle = this.titles[selectedTabIndex];
    localStorage.setItem('indexId', selectedTabIndex);
    this.router.navigate([selectedTitle] , { relativeTo: this.route });
  }
}
