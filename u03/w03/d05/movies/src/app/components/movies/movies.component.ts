import { Component, OnInit, AfterViewInit } from '@angular/core';
import { User } from 'src/app/models/user.interface';
import { Movie } from 'src/app/models/movie.interface';
import { UsersService } from 'src/app/services/users.service';
import { MoviesService } from 'src/app/services/movies.service';
import { environment } from 'src/environments/environment.development';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
    user!: Partial<User>;
    allMovies!: Movie[];
    recommendedMovies!: Movie[];
    popularMovies!: Movie[];
    posterURL = environment.posterURL;
    userDetails!: User;
    userFavorites!: number[] | undefined;
    favoritesLoaded = false;
  currentUser!: User;

    constructor(
        private usersSrv: UsersService,
        private moviesSrv: MoviesService,
        private authSrv: AuthService
    ) {}

    ngOnInit(): void {
        this.authSrv.user$.subscribe((auth) => {
            if (auth && auth.user) {
                this.user = auth.user;
                this.fetchMovies();
                this.moviesSrv.getFavoriteMovies();
                this.retrieveUserFavorites();
            }
        });
    }

    fetchMovies() {
        this.moviesSrv.getMovies().subscribe((data) => {
            this.allMovies = data;
            console.log('All Movies:', this.allMovies);

            if (this.user.adult === false) {
                this.allMovies = this.allMovies.filter(
                    (movie) => movie.adult === false
                );
            }


            const minVoteAverage = 7;
            const minVoteCount = 100;

            this.popularMovies = this.getUniqueMovies(
                this.allMovies.filter(
                    (movie) =>
                        movie.vote_average >= minVoteAverage &&
                        movie.vote_count >= minVoteCount
                )
            );
            console.log('Popular Movies:', this.popularMovies);

            this.recommendedMovies = this.getUniqueMovies(
                this.allMovies
                    .filter((movie) =>
                        movie.genre_ids.some((genreId) =>
                            this.user?.genres?.includes(genreId)
                        )
                    )
                    .filter(
                        (movie) =>
                            !this.popularMovies.some(
                                (popMovie) => popMovie.id === movie.id
                            )
                    )
            );
            console.log('Recommended Movies:', this.recommendedMovies);

            this.allMovies = this.getUniqueMovies(
                this.allMovies.filter(
                    (movie) =>
                        !this.recommendedMovies.some(
                            (recMovie) => recMovie.id === movie.id
                        ) &&
                        !this.popularMovies.some(
                            (popMovie) => popMovie.id === movie.id
                        )
                )
            );
            console.log('All Movies after filtering:', this.allMovies);

        });
    }

    getUniqueMovies(movies: Movie[]): Movie[] {
        const uniqueMovies: Movie[] = [];
        const movieIds: number[] = [];

        for (const movie of movies) {
            if (!movieIds.includes(movie.id)) {
                uniqueMovies.push(movie);
                movieIds.push(movie.id);
            }
        }

        return uniqueMovies.slice(0, 8);
    }

    getImageUrl(posterPath: string | null): string {
        if (!posterPath) {
            return 'assets/placeholder-image.jpg';
        }
        return `${this.posterURL}${posterPath}`;
    }

    toggleFavorite(movie: Movie) {
        const isFavorite = this.isFavorite(movie.id);

        if (isFavorite) {
            this.userFavorites = this.userFavorites?.filter(
                (fav) => fav !== movie.id
            );
        } else {
            this.userFavorites = [...(this.userFavorites || []), movie.id];
        }

        const updatedFavorites = this.userFavorites ?? [];

        const userData: Partial<User> = {
            favorites: updatedFavorites,
        };

        this.usersSrv
            .updateUser(this.user.id!, userData)
            .subscribe((updatedUser) => {
                console.log('User favorites updated:', updatedUser.favorites);
                this.user = updatedUser;
            });
    }

    isFavorite(movieId: number): boolean {
        return !!this.userFavorites?.includes(movieId);
    }

    retrieveUserFavorites() {
      this.usersSrv.getUser(this.user.id).subscribe((user) => {
          this.currentUser = user;
          this.userFavorites = this.currentUser.favorites;
          console.log('CURRENT MOVIE USER: ', this.userFavorites)
      });
  }

    
}

