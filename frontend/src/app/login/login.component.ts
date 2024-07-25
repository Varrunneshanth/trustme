import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,NgIf,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isSignIn = true;
  signInEmail = '';
  signInPassword = '';
  signUpEmail = '';
  signUpPassword = '';
  confirmPassword = '';
  SignUpName='';
  signInError: string='';

  // constructor(private authService: ServiceService, private routers:Router

  // ) {}

  toggleForm(form: string) {
    this.isSignIn = form === 'signIn';
  }


  onSignIn() {
    // this.authService.checkEmail(this.signInEmail).subscribe(
    //   (emailCheckResponse: any) => {
    //     console.log('Email exists, proceeding to sign in');

    //     this.authService.signIn(this.signInEmail, this.signInPassword).subscribe(
    //       (signInResponse: any) => {
    //         console.log('Sign in successful', signInResponse);
    //         this.routers.navigate(['/deshboard']);
    //       },
    //       (signInError: any) => {
    //         console.error('Sign in error', signInError);
    //         this.signInError = 'Invalid credentials';
    //       }
    //     );
    //   },
    //   (emailCheckError: any) => {
    //     console.error('Email check error', emailCheckError);
    //     this.signInError = emailCheckError.status === 404 ? 'Email not found' : 'Error checking email';
    //   }
    // );
  }



  onSignUp() {
  //   if (this.signUpPassword !== this.confirmPassword) {
  //     alert('Passwords do not match');
  //     return;
  //   }

  //   this.authService.signUp(this.signUpEmail, this.signUpPassword).subscribe(
  //     response => {
  //       console.log('Sign up successful', response);
  //       // Handle successful sign up, e.g., redirect user to sign in
  //       this.toggleForm('signIn'); // Optionally switch to sign-in form
  //     },
  //     error => {
  //       console.error('Sign up error', error);
  //       // Handle sign up error
  //     }
  //   );
  }
}
