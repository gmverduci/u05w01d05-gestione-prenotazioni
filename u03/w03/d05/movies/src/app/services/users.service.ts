import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    apiURL = environment.apiURL;
    avatarURL = environment.avatarURL;
    users!: User[];
    avatars: string[] = [];

    constructor(private http: HttpClient) {}

    getUsers() {
        return this.http.get<User[]>(`${this.apiURL}users`);
    }

    getUser(id: number | undefined) {
        return this.http.get<User>(`${this.apiURL}users/${id}`);
    }

    getUserFavorites(userId: number): Observable<number[]> {
        return this.http.get<User[]>(this.apiURL).pipe(
          map((users: User[]) => {
            const user = users.find(u => u.id === userId);
            return user ? user.favorites : [];
          })
        );
      }

    addFavorite(userId: number, movieId: number): Observable<User> {
        const userData: Partial<User> = { favorites: [movieId] };
        return this.http.patch<User>(`${this.apiURL}users/${userId}`, userData);
    }

    getAvatars() {
        return this.http.get<string[]>(`${this.apiURL}avatars`);
    }

    updateUser(id: number, userData: Partial<User>) {
        return this.http.patch<User>(`${this.apiURL}users/${id}`, userData);
    }
}
