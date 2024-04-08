import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.interface';
import { Movie } from 'src/app/models/movie.interface';
import { UsersService } from 'src/app/services/users.service';
import { MoviesService } from 'src/app/services/movies.service';
import { environment } from 'src/environments/environment.development';
import { AuthService } from 'src/app/auth/auth.service';
import { ChunkPipe } from 'src/app/pipes/chunk.pipe';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
    user!: Partial<User>;
    advMovies!: Movie[];
    allMovies!: Movie[];
    recommendedMovies!: Movie[];
    popularMovies!: Movie[];
    posterURL = environment.posterURL

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

            this.recommendedMovies = this.allMovies.filter((movie) =>
                movie.genre_ids.some((genreId) =>
                    this.user?.genres?.includes(genreId)
                )
            );
            console.log('Recommended Movies:', this.recommendedMovies);
            const minVoteAverage = 7;
            const minVoteCount = 100;

            this.popularMovies = this.allMovies.filter(
                (movie) =>
                    movie.vote_average >= minVoteAverage &&
                    movie.vote_count >= minVoteCount
            );
            console.log('Popular Movies:', this.popularMovies);
        });
    }

    getImageUrl(posterPath: string | null): string {
      if (!posterPath) {
        return 'assets/placeholder-image.jpg'; // Placeholder image URL
      }
      return `${this.posterURL}${posterPath}`;
    }
}
