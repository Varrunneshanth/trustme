import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

export interface Review {
item: any;
category: any;
  name: string;
  review: string;
  rating: number;
  email: string;
  phoneNumber?: string;
  website?: string;
  address?: string;
  profilePhoto?: string;
  bank: string; // Add this field to store the bank name
}

export interface CreditUnion {
  id: number;
  allbank: any;
  name: string;
  trustscore: number;
  reviews: number;
  location: string;
  categories: string;
}


@Injectable({
  providedIn: 'root'
})
export class ReviewService {
 
  signIn(signInEmail: any, signInPassword: any) {
    throw new Error('Method not implemented.');
  }
  private baseUrl = 'http://localhost:8080/api';


  // private apiUrl = 'http://localhost:3025/api';
  // isAuthenticated: any;

  // constructor(private http: HttpClient) {}

  // getReviews(): Observable<Review[]> {
  //   return this.http.get<Review[]>(`${this.apiUrl}/reviews=bank_id`);
  // }

  // addReview(review: Review): Observable<any> {
  //   return this.http.post(`${this.apiUrl}/reviews`, review);
  // }

  // signIn(name: string, password: string): Observable<any> {
  //   return this.http.post<any>(`${this.apiUrl}/auth/signin`, { name, password });
  // }

  // signUp(name: string, password: string): Observable<any> {
  //   return this.http.post<any>(`${this.apiUrl}/auth/signup`, { name, password });
  // }

  // getCreditUnions(): Observable<CreditUnion[]> {
  //   return this.http.get<CreditUnion[]>(`${this.apiUrl}/credit-unions`);
  // }

  // getBankDetails(bankId: number): Observable<CreditUnion> {
  //   return this.http.get<CreditUnion>(`${this.apiUrl}/credit-unions/${bankId}`);
  // }

  // getReviewsByBankId(bankId: number): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.apiUrl}/reviews?bank_id=${bankId}`);
  // }
  

  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password });
  }

  signup(user: { username: string, email: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/signup`, user, { responseType: 'text' as 'json' });
  }

  addReview(review: Review): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/reviews`, review);
  }

  // getCompaniesByCategory(category: string): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/category/${category}`);
  // }

  // getCompaniesBySubcategory(subcategory: string): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/subcategory/${subcategory}`);
  // }
  



getReviews(): Observable<Review[]> {
  return this.http.get<Review[]>(`${this.apiUrl}/reviews`);
}

// addReview(review: Review): Observable<any> {
//   return this.http.post(`${this.apiUrl}/reviews`, review);
// }

// login(email: string, password: string): Observable<any> {
//   return this.http.post<any>(`${this.apiUrl}/login`, { email, password });
// }

// signup(user: { username: string, email: string, password: string }): Observable<any> {
//   return this.http.post<any>(`${this.apiUrl}/signup`, user);
// }

getCreditUnions(): Observable<CreditUnion[]> {
  return this.http.get<CreditUnion[]>(`${this.apiUrl}/credit-unions`);
}

getBankDetails(bankId: number): Observable<CreditUnion> {
  return this.http.get<CreditUnion>(`${this.apiUrl}/credit-unions/${bankId}`);
}

getReviewsByBankId(bankId: number): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/reviews/bank/${bankId}`);
}

}