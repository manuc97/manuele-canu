import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { APP_ROUTES_CONFIGURATION } from './../app/app.routes';
@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES_CONFIGURATION)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
