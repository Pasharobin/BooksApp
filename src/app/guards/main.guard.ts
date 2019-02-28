import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

import { LoginService } from "../services/login.service";
 
@Injectable()
export class MainGuard implements CanActivate{

    constructor(
        private loginService: LoginService
        ) { }
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean{
        if (this.loginService.getLoginUser()) {
            return true;
        } else
        return false;
    }
}