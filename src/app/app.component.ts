import { Component } from '@angular/core';
import {RegistrationComponent} from './registration/registration.component';
import {RouterLink, RouterModule, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    RegistrationComponent, RouterLink
  ],
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  title = 'LoginPage';
}
