import { LoginScreenComponent } from './../auth/features/login-screen/login-screen.component'

export const AUTH_ROUTES_CONFIGURATION = [{
    path: '',
    component: LoginScreenComponent,
    outlet: 'notLoggedIn'
}];