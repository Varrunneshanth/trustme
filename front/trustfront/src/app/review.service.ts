// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/internal/Observable';

// export interface Review {
//   comment: string;
//   rating: number;
//   // Add other properties if necessary
// }
// @Injectable({
//   providedIn: 'root'
// })
// export class ReviewService {
//   private apiUrl = 'http://localhost:8080/api/reviews';

//   constructor(private http: HttpClient) { }

//   addReview(companyId: string, review: Review): Observable<any> {
//     return this.http.post<any>(`${this.apiUrl}/add/${companyId}`, review);
//   }
// }

// review.service.ts

// review.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Review {
  comment: string;
  rating: number;
}

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private apiUrl = 'http://localhost:8080/api/reviews';

  constructor(private http: HttpClient) { }

  addReview(companyId: string, review: Review): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/add/${companyId}`, review);
  }

  getReviews(companyId: string): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.apiUrl}/getcompany/${companyId}`);
  }
}


