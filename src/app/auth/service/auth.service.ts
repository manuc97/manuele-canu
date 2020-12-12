import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { AUTH_ROUTES, MAIN_APP_ROUTES } from 'app/routes';

@Injectable({ providedIn: 'root' })
export class AuthService {

    private loginStateSubject = new Subject<boolean>()
    public loginState = this.loginStateSubject.asObservable();

    constructor(private router: Router) { }

    public changeLoginState(value: boolean) {
        this.loginStateSubject.next(value);
    }

    public logout(): void {
        window.localStorage.removeItem('userId');
        this.changeLoginState(false);
    }

    public login(userId: string): void {
        window.localStorage.setItem('userId', userId);
        this.changeLoginState(true);
    }


}