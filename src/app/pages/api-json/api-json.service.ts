import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiJsonService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts/1/comments';

  constructor( private http: HttpClient ) { }

  getGuide(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
