import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';
import { Genres } from '../models/genres.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  apiURL = environment.apiURL;
  genres!: Genres[];

  constructor(private http: HttpClient) {}

  getGenres(){
    return this.http.get<Genres[]>(`${this.apiURL}genres`)
  }
}
