import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from './../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  error: boolean = false;

  constructor(
    private loginService: LoginService,
    private router: Router
    ) { }

  ngOnInit() {
    this.form = new FormGroup({
      password: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    this.error = false;
    let check = this.loginService.checkUser(this.form.get('email').value, this.form.get('password').value);
    if (check) {
      if (this.loginService.userIsAdmin(this.form.get('email').value)) {
        this.router.navigate(["/books-admin"]);
        return;
      }
      this.router.navigate(["/books"]);
      return;
    }
    this.error = true;
  }

  onClick() {
    this.router.navigate(["/registration"]);
  }

}
