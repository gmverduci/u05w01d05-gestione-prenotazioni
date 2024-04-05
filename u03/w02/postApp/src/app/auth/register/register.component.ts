import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
    constructor(private authSrv: AuthService, private router: Router) {}

    onSubmit(form: NgForm) {
        console.log('Submitted form: ', form.value);
        try {
            this.authSrv.signup(form.value).subscribe();
            form.reset();
            this.router.navigate(['/login'])
        } catch (error) {
            console.error(error);
        }
    }
}
