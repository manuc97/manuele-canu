import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ThankYouComponent } from './container/thank-you.component';

const ROUTES_CONFIGURATION = [{
    path: '',
    component: ThankYouComponent
}]

@NgModule({
    imports: [RouterModule.forChild(ROUTES_CONFIGURATION)],
    exports: [RouterModule]
})
export class ThankYouRoutingModule { 
    static components = [ThankYouComponent]
}
