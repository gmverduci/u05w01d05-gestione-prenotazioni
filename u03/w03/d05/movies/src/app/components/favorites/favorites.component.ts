import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Movie } from 'src/app/models/movie.interface';
import { User } from 'src/app/models/user.interface';
import { MoviesService } from 'src/app/services/movies.service';
import { UsersService } from 'src/app/services/users.service';
import { environment } from 'src/environments/environment.development';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
    user!: Partial<User>;
    currentUser!: User;
    userFavorites: number[] = [];
    posterURL = environment.posterURL;
    favorites: Movie[] = [];

    constructor(
        private userSrv: UsersService,
        private movieSrv: MoviesService,
        private authSrv: AuthService
    ) {}

    ngOnInit(): void {
        this.authSrv.user$.subscribe((auth) => {
            if (auth && auth.user) {
                this.user = auth.user;
                this.retrieveUserFavorites();
            }
        });
    }

    retrieveUserFavorites() {
        this.userSrv.getUser(this.user.id!).subscribe((user) => {
            this.currentUser = user;
            this.userFavorites = this.currentUser.favorites;
            this.getFavoriteMovies();
        });
    }

    getImageUrl(posterPath: string | null): string {
        if (!posterPath) {
            return 'assets/placeholder-image.jpg';
        }
        return `${this.posterURL}${posterPath}`;
    }

    getFavoriteMovies() {
        this.movieSrv.getMovies().subscribe((movies: Movie[]) => {
            console.log('All Movies:', movies);
            this.favorites = movies.filter((movie) =>
                this.userFavorites.includes(movie.id)
            );
            console.log('Favorite Movies:', this.favorites);
        });
    }

    isFavorite(movieId: number): boolean {
        return this.userFavorites.includes(movieId);
    }

    toggleFavorite(movie: Movie) {
      const isFavorite = this.isFavorite(movie.id);

      if (isFavorite) {
          this.userFavorites = this.userFavorites.filter(
              (fav) => fav !== movie.id
          );
          this.favorites = this.favorites.filter((fav) => fav.id !== movie.id);
      } else {
          this.userFavorites = [...this.userFavorites, movie.id];
          this.favorites.push(movie);
      }

      const userData: Partial<User> = {
          favorites: this.userFavorites,
      };

      this.userSrv.updateUser(this.user.id!, userData).subscribe((updatedUser) => {
          console.log('User favorites updated:', updatedUser.favorites);
          this.user = updatedUser;
      });
  }
}
