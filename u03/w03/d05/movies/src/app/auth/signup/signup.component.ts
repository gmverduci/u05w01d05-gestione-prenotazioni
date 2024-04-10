import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { Genres } from 'src/app/models/genres.interface';
import { Signup } from 'src/app/models/signup.interface';
import { UsersService } from 'src/app/services/users.service';
import { environment } from 'src/environments/environment.development';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
    genres!: Genres[];
    selectedGenreIds: number[] = [];
    email: string = '';
    avatars!: string[];
    selectedAvatar: string = '';
    avatarURL = environment.avatarURL;

    @ViewChild('signupForm') signupForm!: NgForm;

    constructor(
        private authSrv: AuthService,
        private usersSrv: UsersService,
        private moviesSrv: MoviesService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.queryParams.subscribe((params) => {
            this.email = params['email'] || '';
        });
        this.moviesSrv.getGenres().subscribe((data) => {
            this.genres = data;
        });
        this.usersSrv.getAvatars().subscribe((data) => {
            this.avatars = data;
        });
       
    }

    onGenreChange(event: any, genreId: number) {
        if (event.target.checked) {
            if (!this.selectedGenreIds.includes(genreId)) {
                this.selectedGenreIds.push(genreId);
            }
        } else {
            const index = this.selectedGenreIds.indexOf(genreId);
            if (index > -1) {
                this.selectedGenreIds.splice(index, 1);
            }
        }
    }

    onSubmit(form: NgForm) {
        if (form.valid) {
            const isAdult = form.value.age >= 18;

            const signupData: Signup = {
                name: form.value.name,
                email: form.value.email,
                adult: isAdult,
                genres: this.selectedGenreIds,
                password: form.value.password,
                avatar: this.selectedAvatar,
                favorites: [],
            };
            try {
                this.authSrv.signup(signupData).subscribe(() => {
                    console.log('User signed up successfully: ', signupData);
                    this.signupForm.resetForm();
                    this.router.navigate(['/login']);
                });
            } catch (error) {
                console.error(error);
            }
        }
    }
}
