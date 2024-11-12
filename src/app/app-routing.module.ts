import {ApplicationConfig, NgModule} from '@angular/core';
import {provideRouter, RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {RegistrationComponent} from './registration/registration.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Home page as default
  { path: 'registration', component: RegistrationComponent },
  {path: 'login', component: LoginComponent }
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
