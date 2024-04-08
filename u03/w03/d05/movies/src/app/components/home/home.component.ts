import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {
    FormBuilder,
    FormGroup,
    Validators,
} from '@angular/forms';
import { Auth } from 'src/app/models/auth.interface';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    emailForm: FormGroup;
    currentRoute!: string;
    user!: Auth | null;

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private authSrv: AuthService
    ) {
        this.emailForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
        });
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.currentRoute = event.url;
            }
        });
    }

    ngOnInit(): void {
        this.authSrv.user$.subscribe((user) => {
            this.user = user;
        });
    }

    onSignupClick() {
        if (this.emailForm.valid) {
            const email = this.emailForm.get('email')!.value;
            this.router.navigate(['/signup'], {
                queryParams: { email: email },
            });
        }
    }

    onAvatarClick(){
        const id = this.user?.user.id;
        this.router.navigate(['/user'], {
            queryParams: { id: id },
        });
    }

    logout() {
        this.authSrv.logout();
    }
}
