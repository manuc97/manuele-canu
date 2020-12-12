import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthService } from 'app/auth/service/auth.service';
import { MAIN_APP_ROUTES, AUTH_ROUTES } from './routes';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public isLoggedIn = false;

  private destroy$ = new Subject<boolean>();

  constructor(private authService: AuthService, private router: Router) {
    this.isLoggedIn = !!window.localStorage.getItem('userId');
  }

  ngOnInit() {
    this.authService.loginState.pipe(takeUntil(this.destroy$)).subscribe((loginState: boolean) => {
      this.isLoggedIn = loginState;

      const navRoute = this.isLoggedIn ? MAIN_APP_ROUTES.HOME : AUTH_ROUTES.LOGIN;
      this.router.navigate([navRoute])
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
