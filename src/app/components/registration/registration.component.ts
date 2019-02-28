import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from './../../services/login.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;
  minLength: number;

  constructor(
    private loginService: LoginService,
    private router: Router
    ) { }

  ngOnInit() {
    this.minLength = this.loginService.getMinPassLength();
    
    this.form = new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(this.minLength)]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  onSubmit() {
    this.loginService.addUser(this.form.get('email').value, this.form.get('password').value);
    this.router.navigate(["/login"]);
  }

}
