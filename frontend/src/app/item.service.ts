import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = 'http://localhost:8080/api/items';

  constructor(private http: HttpClient) {}

  getItemsByCategoryId(categoryId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?categoryId=${categoryId}`);
  }

  getItemById(itemId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${itemId}`);
  }
}
