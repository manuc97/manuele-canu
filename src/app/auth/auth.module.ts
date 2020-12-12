import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
    imports: [
        AuthRoutingModule,
        SharedModule,
        CommonModule,
    ],
    exports: [],
    declarations: AuthRoutingModule.components,
    providers: [],
})
export class AuthModule { }
