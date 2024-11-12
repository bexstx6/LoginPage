import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';
import {DataBase} from '../DAO/DataBase';
import {User} from '../DAO/User';

@Component({
  selector: 'app-login',
  standalone: true,
  providers: [DataBase],
  imports: [
    FormsModule,
    NgForOf,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user: User = new User('', '');
  dataBase: DataBase;

  constructor(dataBase: DataBase) {
    this.dataBase = dataBase;
  }

  onSubmit() {
    console.log(this.user.username);
    console.log(this.user.password);

    if(!this.user.username || !this.user.password){
      alert("Please, fill all fields")
      return;
    }

    if(!this.dataBase){
      alert("Data Base is Empty!")
    }

    let found: boolean = false;

    for(let user of this.dataBase.users){
      if(user.username == this.user.username && user.password == this.user.password){
        this.user = new User('', '');
        found  = true;
      }
    }

    if(!found){
      alert("User not found");
      return;
    }
  }
}
