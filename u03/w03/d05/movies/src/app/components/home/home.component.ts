import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, Scroll } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  emailForm: FormGroup;



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
      if (!user) {
        return;
      }
      else {
        this.router.navigate(['/movies']);      }
    })
  }
  

    
  onSignupClick() {
    if (this.emailForm.valid) {
      const email = this.emailForm.get('email')!.value;
      this.router.navigate(['/signup'], {
        queryParams: { email: email },
      });
    }
  }

  

  
}
