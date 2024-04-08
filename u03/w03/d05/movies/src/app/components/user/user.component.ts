import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/models/user.interface';
import { MoviesService } from 'src/app/services/movies.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
    currentUser!: User;

    constructor(
        private authSrv: AuthService,
        private usersSrv: UsersService,
        private moviesSrv: MoviesService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            const id = +params['id'];
            this.usersSrv.getUser(id).subscribe((data: User) => {
              this.currentUser = data;
            })
        });
        
        
    }
}
