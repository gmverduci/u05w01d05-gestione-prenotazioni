import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { MoviesComponent } from './components/movies/movies.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent,
            },
            {
              path: 'movies',
              component: MoviesComponent
            }
        ],
    },
    {
        path: 'signup',
        component: SignupComponent,
    },
    {
        path: 'user/:id',
        component: UserComponent,
    }
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
