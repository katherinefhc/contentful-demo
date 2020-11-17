import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  activeLink: string;
  links = [
    { route: 'profile', label: 'Profile' },
    { route: 'dashboard', label: 'Dashboard' },
    { route: 'login', label: 'Login' },
];
}
