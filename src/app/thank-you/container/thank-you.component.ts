import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { MAIN_APP_ROUTES } from 'app/routes';

@Component({
    selector: 'thank-you',
    templateUrl: './thank-you.component.html',
    styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent {

    constructor(private router: Router) { }

    public redirect(): void {
        this.router.navigate([MAIN_APP_ROUTES.HOME])
    }
}