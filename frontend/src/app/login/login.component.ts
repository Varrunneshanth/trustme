import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,NgIf,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isSignIn = true;
  signInForm: FormGroup;
  signUpForm: FormGroup;
  signInError: string = '';
  signUpError: string = '';

  constructor(private fb: FormBuilder, private authService: ReviewService) {
    this.signInForm = this.fb.group({
      signInName: ['', Validators.required],
      signInPassword: ['', Validators.required]
    });

    this.signUpForm = this.fb.group({
      signUpName: ['', Validators.required],
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
      const { signInName, signInPassword } = this.signInForm.value;
      this.authService.signIn(signInName, signInPassword).subscribe(
        response => {
          console.log('Sign in successful', response);
          // this.router.navigate(['/home']);
        },
        error => {
          console.error('Sign in error', error);
          this.signInError = 'Invalid credentials. Please provide the correct name and password.';
        }
      );
    }
  }

  onSignUp() {
    if (this.signUpForm.valid) {
      const { signUpName, signUpPassword } = this.signUpForm.value;
      this.authService.signUp(signUpName, signUpPassword).subscribe(
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
