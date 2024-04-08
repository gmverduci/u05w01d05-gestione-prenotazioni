import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, Scroll } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth } from 'src/app/models/auth.interface';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  emailForm: FormGroup;
  currentRoute!: string;
  user!: Auth | null;
  isMoviesRoute: boolean = false;

  moviesBackgroundStyle = {
    'background-color': '#141414',
    'background-image': 'none',
  };

  bgNetStyle = {
    'background-image': 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(../../../assets/img/bg-big.jpeg)',
    'background-size': 'cover',
    'background-repeat': 'no-repeat',
    'background-position': 'center'
  };

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authSrv: AuthService
  ) {
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {
    this.authSrv.user$.subscribe((user) => {
      this.user = user;
      console.log('User:', this.user);
    });

    this.router.events.subscribe((event) => {
      if (event instanceof Scroll) {
        const navigationEndEvent = event.routerEvent;
        if (navigationEndEvent instanceof NavigationEnd) {
          this.currentRoute = navigationEndEvent.url;
          this.isMoviesRoute = this.currentRoute === '/movies'; // Imposta isMoviesRoute in base alla route corrente
          console.log('Current route:', this.currentRoute);
        }
      }
    });
  }

  onSignupClick() {
    if (this.emailForm.valid) {
      const email = this.emailForm.get('email')!.value;
      this.router.navigate(['/signup'], {
        queryParams: { email: email },
      });
    }
  }

  onAvatarClick() {
    const id = this.user?.user.id;
    this.router.navigate(['/user'], {
      queryParams: { id: id },
    });
  }

  logout() {
    this.authSrv.logout();
  }
}
