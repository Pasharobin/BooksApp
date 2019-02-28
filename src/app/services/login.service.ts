import { Injectable } from '@angular/core';

import { User } from '../models/user.model';

@Injectable()
export class LoginService {

  users: User[] = [
    {email: "admin@tut.by", password: "admin", admin: true},
    {email: "user@tut.by", password: "user", admin: false}
  ];
  minLength: number = 4;
  loginUser: string = "";

  constructor() { }

  addUser(email:string, password:string) {
    let user = new User(email, password);
    this.users.push(user);
  }

  getMinPassLength() {
    return this.minLength;
  }

  checkUser(email: string, password:string) {
    for (let user of this.users) {
      if (user.email == email) {
        if (user.password == password) {
          this.loginUser = user.email;
          return true;
        }
      }
    }
    return false;
  }

  userIsAdmin(email:string) {
    for (let user of this.users) {
      if (user.email == email) {
        if (user.admin) {
          return true;
        }
      }
    }
    return false;
  }

  getLoginUser() {
    return this.loginUser;
  }

  clearLoginUser() {
    this.loginUser = "";
  }
}
