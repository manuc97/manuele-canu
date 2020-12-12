import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';

// Material
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '@app-shared/shared.module';
import { MatRadioModule } from '@angular/material/radio';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        HomeRoutingModule,
        MatStepperModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        SharedModule,
        CommonModule,
    ],
    exports: [],
    declarations: HomeRoutingModule.components,
    providers: [],
})
export class HomeModule { }
