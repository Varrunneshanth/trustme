// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   constructor() { }
// }


// auth.service.ts
// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private isLoggedIn: boolean = false;

//   constructor(private router: Router) {}

//   login() {
//     this.isLoggedIn = true;
//   }

//   logout() {
//     this.isLoggedIn = false;
//     this.router.navigate(['/sigin-sigup']);
//   }

//   isAuthenticated(): boolean {
//     return this.isLoggedIn;
//   }
// }

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated(): boolean {
    // Check if the user is authenticated
    return !!localStorage.getItem('authToken'); // Example check
  }

  signOut(): void {
    // Clear authentication data
    localStorage.removeItem('authToken');
  }
}

