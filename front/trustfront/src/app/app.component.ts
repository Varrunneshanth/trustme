import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from './auth.service';
import { NgIf } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'trustfront';

  // constructor(public authService: AuthService) {}

 

  // isSignedIn: boolean = false;
  // onSignIn() {
    
  //   this.isSignedIn = true; 
  // }

  // onSignOut() {
  //   this.authService.logout();
  //   this.isSignedIn = false;
  // isSignedIn: boolean = false;

  // constructor(private authService: AuthService, private router: Router) { }

  // ngOnInit(): void {
  //   this.isSignedIn = this.authService.isAuthenticated(); // Update this logic as needed
  // }

  // onSignOut(): void {
  //   this.authService.signOut(); // Implement this method in your AuthService
  //   this.isSignedIn = false;
  //   this.router.navigate(['/sigin-sigup']); // Navigate to the sign-in/sign-up page
  // }


  isSignedIn: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Check local session or a default flag for signed-in status
    const signedInStatus = sessionStorage.getItem('isSignedIn');
    this.isSignedIn = signedInStatus === 'true';
  }

  onSignOut(): void {
    // Clear session storage or set the flag
    sessionStorage.removeItem('isSignedIn');
    this.isSignedIn = false;
    this.router.navigate(['/sigin-sigup']); // Navigate to sign-in/sign-up page
  }
  
}
