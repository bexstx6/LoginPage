import {User} from './User';
import {Injectable} from '@angular/core';

@Injectable()
export class DataBase {
  users: User[] = [];
  addUser(user: User){
    this.users.push(user);
  }

  getUsers(): string[] {
    let usernames: string[] = [];
    for (let user of this.users) {
      usernames.push(user.username); // Добавляем только username в массив
    }
    return usernames;
  }
}
