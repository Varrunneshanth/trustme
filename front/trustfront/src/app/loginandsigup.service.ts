import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class LoginandsigupService {

  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password });
  }

  signup(user: { username: string, email: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/signup`, user, { responseType: 'text' as 'json' });
  }
}
