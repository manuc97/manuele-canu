import { NgModule } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app-shared/shared.module';
import { ThankYouRoutingModule } from './thank-you.routing.module';

@NgModule({
    imports: [
        ThankYouRoutingModule,
        MatCardModule,
        SharedModule,
        CommonModule,
    ],
    exports: [],
    declarations: ThankYouRoutingModule.components,
    providers: [],
})
export class ThankYouModule { }
