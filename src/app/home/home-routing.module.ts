import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';

const HOME_ROUTES_CONFIGURATION = [{
    path: '',
    component: DashboardComponent
}]

@NgModule({
    imports: [RouterModule.forChild(HOME_ROUTES_CONFIGURATION)],
    exports: [RouterModule]
})
export class HomeRoutingModule { 
    static components = [DashboardComponent]
}
