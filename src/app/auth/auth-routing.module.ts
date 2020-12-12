import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AUTH_ROUTES_CONFIGURATION } from './auth.routes';
import { LoginScreenComponent } from './features/login-screen/login-screen.component';

@NgModule({
    imports: [RouterModule.forChild(AUTH_ROUTES_CONFIGURATION)],
    exports: [RouterModule],
    declarations: [],
})
export class AuthRoutingModule { 
    static components = [LoginScreenComponent]
}
