import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';
import { Movie } from '../models/movie.interface';
import { Genres } from '../models/genres.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { AuthService } from '../auth/auth.service';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  apiURL = environment.apiURL;
  genres!: Genres[];
  movies!: Movie[];

  constructor(private http: HttpClient, private authSrv: AuthService) {}

  getMovies(){
    return this.http.get<Movie[]>(`${this.apiURL}movies`)
  }


  getGenres(){
    return this.http.get<Genres[]>(`${this.apiURL}genres`)
  }

  getFavoriteMovies() {
    const userId = this.authSrv.getUserId(); 
    return this.http.get<Movie[]>(`${this.apiURL}users/${userId}/favorites`);
  }

  getRecommendedMovies(): Observable<Movie[]> {
    const userId = this.authSrv.getUserId();
    return this.http.get<number[]>(`${this.apiURL}users/${userId}/genres`).pipe(
      switchMap((userGenres: number[]) => {
        return this.http.get<Movie[]>(`${this.apiURL}movies`).pipe(
          map((movies: Movie[]) => {
            return movies.filter(movie => {
              return movie.genre_ids.some(genreId => userGenres.includes(genreId));
            });
          })
        );
      })
    );
  }
  
}
