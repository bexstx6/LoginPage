import { Component } from '@angular/core';
import {User} from '../DAO/User';
import {DataBase} from '../DAO/DataBase';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-registration',
  standalone: true,
  providers: [DataBase],
  templateUrl: './registration.component.html',
  imports: [
    FormsModule,
    NgForOf
  ],
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  user: User = new User('', '');
  dataBase: DataBase;

  passwordConfirmation : string = '';

  constructor(dataBase: DataBase) {
    this.dataBase = dataBase;
  }

  onSubmit(){
  console.log(this.user.username);
  console.log(this.user.password);
  console.log(this.passwordConfirmation);

    if(!this.user.username || !this.user.password || !this.passwordConfirmation){
      alert("Please, fill all fields")
      return;
    }

    if(this.user.password !== this.passwordConfirmation){
      alert("Passwords don't match");
      return;
    }

    for(let user of this.dataBase.users){
      if(user.username === this.user.username){
        alert("User already exists");
        return;
      }

    }
      this.dataBase.addUser(this.user);
      this.user = new User('', '');
      this.passwordConfirmation = '';
  }
}
