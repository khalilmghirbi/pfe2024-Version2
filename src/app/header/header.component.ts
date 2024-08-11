import { Component, EventEmitter, Output } from '@angular/core';
import { SessionInfos } from '../shared/models/session-infos';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  title = 'Welcome Memorial Hospitol';
  @Output() toogleSideNav = new EventEmitter();
  isloggedIn: boolean = false;
  sessionInfo: SessionInfos = {
    UserName: 'John Doe',
    IsAdmin: false,
    Email: 'john.Doe@hospitol.com',
  };
  signOut() {
    console.log('signOut');
  }

  toogleMenu() {
    this.toogleSideNav.emit();
  }
}
