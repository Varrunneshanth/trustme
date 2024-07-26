import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

export interface Review {
  name: string;
  review: string;
  rating: number;
  email: string;
  phoneNumber?: string;
  website?: string;
  address?: string;
  profilePhoto?: string;
}

export interface CreditUnion {
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
  // private baseUrl = 'http://localhost:3000/api';

  // constructor(private http: HttpClient) {}

  // getReviews(): Observable<Review[]> {
  //   return this.http.get<Review[]>(`${this.baseUrl}/reviews`);
  // }

  // addReview(review: Review): Observable<any> {
  //   return this.http.post(`${this.baseUrl}/reviews`, review);
  // }

  // signIn(name: string, password: string): Observable<any> {
  //   return this.http.post<any>(`${this.baseUrl}/auth/signin`, { name, password });
  // }

  // signUp(name: string, password: string): Observable<any> {
  //   return this.http.post<any>(`${this.baseUrl}/auth/signup`, { name, password });
  // }


  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.apiUrl}/reviews`);
  }

  addReview(review: Review): Observable<any> {
    return this.http.post(`${this.apiUrl}/reviews`, review);
  }

  signIn(name: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/signin`, { name, password });
  }

  signUp(name: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/signup`, { name, password });
  }

  getCreditUnions(): Observable<CreditUnion[]> {
    return this.http.get<CreditUnion[]>(`${this.apiUrl}/credit-unions`);
  }
}
