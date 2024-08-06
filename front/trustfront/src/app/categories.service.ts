import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private apiUrl = 'http://localhost:8080/api/categories';
  private apiUrl1 = 'http://localhost:8080/api/companies';
  constructor(private http: HttpClient) { }

//  getCategories(): Observable<any> {
//     return this.http.get<any>(this.apiUrl);
//   }

//   getCategoryCompanies(categoryId: any): Observable<any> {
//     return this.http.get<any>(`${this.apiUrl1}/${categoryId}`);
//   }


getCategories(): Observable<any> {
  return this.http.get<any>(this.apiUrl);
}

getCategoryCompanies(categoryId: string): Observable<any> {
  return this.http.get<any>(`${this.apiUrl1}/${categoryId}`);
}

getCompanyDetails(companyId: string): Observable<any> {
  return this.http.get<any>(`${this.apiUrl1}/details/${companyId}`);
}
}

