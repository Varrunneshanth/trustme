import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginandsigupService } from '../loginandsigup.service';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-sigin-sigup',
  standalone: true,
  imports: [NgIf,NgFor,FormsModule, ReactiveFormsModule,],
  templateUrl: './sigin-sigup.component.html',
  styleUrl: './sigin-sigup.component.css'
})
export class SiginSigupComponent {
  isSignIn = true;
  signInForm: FormGroup;
  signUpForm: FormGroup;
  signInError: string = '';
  signUpError: string = '';

  constructor(private fb: FormBuilder, private authService: LoginandsigupService, private router: Router) {
    this.signInForm = this.fb.group({
      signInEmail: ['', [Validators.required, Validators.email]],
      signInPassword: ['', Validators.required]
    });

    this.signUpForm = this.fb.group({
      signUpName: ['', Validators.required],
      signUpEmail: ['', [Validators.required, Validators.email]],
      signUpPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  toggleForm(form: string) {
    this.isSignIn = form === 'signIn';
    this.signInError = '';
    this.signUpError = '';
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('signUpPassword')?.value === form.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }

  onSignIn() {
    if (this.signInForm.valid) {
      const { signInEmail, signInPassword } = this.signInForm.value;
      this.authService.login(signInEmail, signInPassword).subscribe(
        response => {
          console.log('Sign in successful', response);
          this.router.navigate(['/categories']);
        },
        error => {
          console.error('Sign in error', error);
          this.signInError = 'Invalid credentials. Please provide the correct email and password.';
        }
      );
    }
  }

  onSignUp() {
    if (this.signUpForm.valid) {
      const { signUpName, signUpEmail, signUpPassword } = this.signUpForm.value;
      this.authService.signup({ username: signUpName, email: signUpEmail, password: signUpPassword }).subscribe(
        response => {
          console.log('Sign up successful', response);
          this.toggleForm('signIn');
        },
        error => {
          console.error('Sign up error', error);
          this.signUpError = 'Sign up failed. Please try again.';
        }
      );
    }
  }
}
