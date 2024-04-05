import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    constructor(private authSrv: AuthService, private router: Router) {}

    login(form: NgForm) {
        console.log('Form login: ', form.value);
        try {
            this.authSrv.login(form.value).subscribe();
            this.router.navigate(['/']);
        } catch (error) {
            console.error(error);
        }
    }
}
