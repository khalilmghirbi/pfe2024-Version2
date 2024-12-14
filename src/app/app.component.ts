import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hopital';
  isSideNavOpened = true;

  /**
   *
   */
  constructor(public authService : AuthService) {
    
  }
  toogleSideNav() {
    this.isSideNavOpened = !this.isSideNavOpened;
  }
}
