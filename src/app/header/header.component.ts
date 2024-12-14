import { Component, EventEmitter, Output } from '@angular/core';
import { SessionInfos } from '../shared/models/session-infos';
import { AuthService } from '../shared/services/auth.service';
import { map, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  title = 'Welcome Memorial Hospitol';
  @Output() toogleSideNav = new EventEmitter();
  isloggedIn: boolean = false;
  username$!: Observable<string>;
/**
 *
 */
constructor(public authService : AuthService) {
  this.username$ = this.authService.userDetail$.pipe(
    map(value=>value?.username ?? ''));
}

  signOut() {
    this.authService.logout();
  }

  toogleMenu() {
    this.toogleSideNav.emit();
  }
}
