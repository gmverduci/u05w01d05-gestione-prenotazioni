import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';
import { Movie } from '../models/movie.interface';
import { Genres } from '../models/genres.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { AuthService } from '../auth/auth.service';
import { map, switchMap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { UsersService } from './users.service';



@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  apiURL = environment.apiURL;
  genres!: Genres[];
  movies!: Movie[];
  user!: User | null;
  favoriteMovies!: number[];

  favorites = new BehaviorSubject<number[]>([]);
  userFavorites!: number[];

  constructor(private http: HttpClient, private authSrv: AuthService, private userSrv: UsersService) {}

  getMovies(){
    return this.http.get<Movie[]>(`${this.apiURL}movies`)
  }


  getGenres(){
    return this.http.get<Genres[]>(`${this.apiURL}genres`)


  }

  isFav(id: number) {
    return this.userFavorites.find(favorite => favorite === id);
}

addFavorite(id: number) {
  const exist = this.userFavorites.find(present => present === id);
  if(!exist) {
      this.userFavorites.push(id);
      this.favoritesList();
  }
}

favoritesList() {
  this.favorites.next(this.userFavorites);
}

removeFavorite(id: number) {
  const index = this.userFavorites.findIndex(favorite => favorite === id);
  this.userFavorites.splice(index, 1);
  this.favoritesList();
}

getFavoriteMovies(){
  const userId = this.authSrv.getUserId();

  this.userSrv.getUser(userId).pipe(
    map((user: User) => {
      this.userFavorites = user.favorites;
      console.log('FAVORITE SERVC: ',this.userFavorites)
      this.favorites.next(this.userFavorites);
    })
  );
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
