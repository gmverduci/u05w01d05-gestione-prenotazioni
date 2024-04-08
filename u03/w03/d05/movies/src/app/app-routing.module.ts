import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { MoviesComponent } from './components/movies/movies.component';
import { UserComponent } from './components/user/user.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent,
                canActivate: [AuthGuard]
            },
            {
              path: 'movies',
              component: MoviesComponent,
              canActivate: [AuthGuard]
            }
        ],
    },
    {
        path: 'signup',
        component: SignupComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'user/:id',
        component: UserComponent,
        canActivate: [AuthGuard]
    }
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
