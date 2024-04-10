import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Auth } from 'src/app/models/auth.interface';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
    user!: Auth | null;
    currentUser!: User;
    constructor(
        private authSrv: AuthService,
        private userSrv: UsersService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.authSrv.user$.subscribe((user) => {
            this.user = user;
            console.log('User:', this.user);
        });
        if (this.user) {
            this.retrieveUserDetails();
        }
    }

    retrieveUserDetails() {
        this.userSrv.getUser(this.user?.user.id).subscribe((user) => {
            this.currentUser = user;
            console.log('CURRENT: ', this.currentUser)
        });
    }

    onAvatarClick() {
        const id = this.user?.user.id;
        this.router.navigate(['/user'], {
            queryParams: { id: id },
        });
    }

    logout() {
        this.authSrv.logout();
    }

        
}
