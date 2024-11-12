import { Component } from '@angular/core';
import {RegistrationComponent} from './registration/registration.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RegistrationComponent
  ],
  template: '<app-registration></app-registration>'
})
export class AppComponent {
  title = 'LoginPage';
}
