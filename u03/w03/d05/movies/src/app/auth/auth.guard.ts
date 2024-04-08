import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    RouterStateSnapshot,
    Router,
    UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | UrlTree {
        const user = localStorage.getItem('user');
        const isLoggedIn = !!user;
        const isLoginOrSignupRoute =
            state.url === '/login' || state.url === '/signup';
        const isMoviesOrUserRoute =
            state.url === '/movies' || state.url.startsWith('/user/');
        const isEmptyRoute = state.url === '';

        if (isLoggedIn) {
            if (isLoginOrSignupRoute) {
                return this.router.createUrlTree(['/movies']);
            }
            if (isEmptyRoute) {
                return this.router.createUrlTree(['/movies']);
            }
            if (isMoviesOrUserRoute) {
                return true;
            }
        } else {
            if (isMoviesOrUserRoute) {
                return this.router.createUrlTree(['/login']);
            }
            if (isLoginOrSignupRoute) {
                return true;
            }
        }

        return true;
    }
}
