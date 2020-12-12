import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { USERS } from './../../service/mock.data';
import { AuthService } from './../../service/auth.service';

@Component({
    selector: 'login-screen',
    templateUrl: './login-screen.component.html',
    styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent {
    public loginForm: FormGroup;

    public loading = false;
    public submitted = false;

    private mockUsers = USERS;

    constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    public onSubmit() {
        if (this.loginForm.status === 'VALID') {
            const username = this.loginForm.controls.username.value;
            const password = this.loginForm.controls.password.value;

            const foundUser = this.mockUsers.find((user) => user.password === password && user.username === username);

            if (foundUser) {
                this.authService.login('324098-21321-dsad-32c23-21es4');
            }
        }
    }
}
