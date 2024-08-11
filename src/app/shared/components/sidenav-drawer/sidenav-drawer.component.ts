import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav-drawer',
  templateUrl: './sidenav-drawer.component.html',
  styleUrls: ['./sidenav-drawer.component.scss'],
})
export class SidenavDrawerComponent {
  navigate(arg: string) {
    console.log(arg);
  }
}
