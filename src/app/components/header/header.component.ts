import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { LoginService } from './../../services/login.service';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: string = "";

  constructor(
    private loginService: LoginService,
    private appService: AppService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = this.loginService.getLoginUser();
  }

  logout() {
    this.loginService.clearLoginUser();
    this.appService.clearSelected();
    this.router.navigate(["/login"]);
  }

}
