import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {

    private loginStateSubject = new Subject<boolean>()
    public loginState = this.loginStateSubject.asObservable();

    constructor() { }

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