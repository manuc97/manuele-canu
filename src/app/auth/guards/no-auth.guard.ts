import { Injectable } from '@angular/core';
import { Router, CanLoad, Route } from '@angular/router';
import { MAIN_APP_ROUTES } from 'app/routes';

@Injectable({providedIn: 'root'})
export class NoAuthGuard implements CanLoad {
    constructor(private router: Router) { }

    canLoad(route: Route) {
        const id = window.localStorage.getItem('userId');
        return !id ? true : false;
    }
}