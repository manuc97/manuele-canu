import { AuthGuard } from './../app/auth/guards/auth.guard';
import { NoAuthGuard } from './../app/auth/guards/no-auth.guard'
import { MAIN_APP_ROUTES, EXTRA_ROUTES, AUTH_ROUTES } from './routes';


export const APP_ROUTES_CONFIGURATION = [{
    path: '',
    redirectTo: MAIN_APP_ROUTES.HOME,
    pathMatch: 'full'
}, {
    path: MAIN_APP_ROUTES.HOME,
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    canLoad: [AuthGuard]
}, {
    path: 'thank-you',
    loadChildren: () => import('./thank-you/thank-you.module').then(m => m.ThankYouModule),
    canLoad: [AuthGuard]
}, {
    path: AUTH_ROUTES.LOGIN,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canLoad: [NoAuthGuard],
}, {
    path: '**', redirectTo: EXTRA_ROUTES.NOT_FOUND
}];