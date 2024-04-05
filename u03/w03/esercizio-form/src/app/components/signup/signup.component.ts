import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { User } from 'src/app/models/user.interface';
import { Subscription } from 'rxjs';

@Component({
 selector: 'app-signup',
 templateUrl: './signup.component.html',
 styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit, OnDestroy {
 form!: FormGroup;
 user!: User;
 private formValueChangesSubscription!: Subscription;

 constructor(private fb: FormBuilder) {}

 ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [
        Validators.required,
        Validators.pattern("^[a-zA-ZÀ-ÿ' ]+$"),
      ]],
      surname: ['', [
        Validators.required,
        Validators.pattern("^[a-zA-ZÀ-ÿ' ]+$"),
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16),
        Validators.pattern(
          '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,16}$'
        ),
      ]],
      verifyPassword: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      avatar: ['', [
        Validators.required,
        Validators.pattern('(https?://.*\\.(?:png|jpeg|jpg|webp))'),
      ]],
      bio: ['', [
        Validators.maxLength(200),
        Validators.pattern('^[a-zA-ZÀ-ÿ0-9.,;:!?\\s-]+$'),
      ]],
    }, { validators: this.passwordMatchValidator });

    this.formValueChangesSubscription = this.form.valueChanges.subscribe((status) => {
      console.log('Stato del form: ', status);
    });
 }

 ngOnDestroy(): void {
    this.formValueChangesSubscription.unsubscribe();
 }

 passwordMatchValidator(group: AbstractControl): { [key: string]: boolean } | null {
    const passwordControl = group.get('password');
    const verifyPasswordControl = group.get('verifyPassword');

    if (!passwordControl || !verifyPasswordControl) {
      return null;
    }

    if (passwordControl.value !== verifyPasswordControl.value) {
      return { passwordMismatch: true };
    }

    return null; 
 }

 onSubmit(): void {
    if (this.form.invalid) {
      console.log('Il form contiene errori di validazione.');
      return;
    }

    this.user = this.form.value;
    console.log('Oggetto user: ', this.user);
    console.log('Form correttamente inviato');
    this.form.reset(); // Correctly reset the form
 }
}
