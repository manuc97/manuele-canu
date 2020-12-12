import { Injectable } from '@angular/core';
import { Router, CanLoad, Route } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanLoad {
    constructor(private router: Router) { }

    canLoad(route: Route) {
        const id = window.localStorage.getItem('userId');
        if (!id) {
            this.router.navigate(['login'])
        }
        return id ? true : false;
    }
}