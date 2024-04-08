import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    apiURL = environment.apiURL;
    avatarURL = environment.avatarURL;
    users!: User[];
    favorites: number[] = [];
    avatars: string[] = [];

    constructor(private http: HttpClient) {}

    getUsers() {
        return this.http.get<User[]>(`${this.apiURL}users`);
    }

    getUser(id: number) {
        return this.http.get<User>(`${this.apiURL}users/${id}`);
    }

    getFavorites(user: User) {
        this.favorites.concat(user.favorites);
    }

    getavatars() {
        return this.http.get<string[]>(`${this.apiURL}avatars`);
    }
}
