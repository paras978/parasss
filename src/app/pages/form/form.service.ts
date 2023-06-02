import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Form } from './form.model';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private messagesUrl = 'http://localhost:3000/form';

  constructor(private http: HttpClient) { }

  getMessages() {
    return this.http.get(this.messagesUrl);
  }

  addMessage(message: any) {
    return this.http.post(this.messagesUrl, message);
  }

  updateMessage(id: number, message: any) {
    const url = `${this.messagesUrl}/${id}`;
    return this.http.put(url, message);
  }

  deleteMessage(id: string) {
    return this.http.delete<any>(`${this.messagesUrl}/${id}`);
  }
}








  // private apiUrl = 'http://localhost:3000/form';

  // constructor( private http: HttpClient ) { }

  // getData(): Observable<Form[]> {
  //   return this.http.get<Form[]>(this.apiUrl);
  // }
  // getNewData(id: number): Observable<Form> {
  //   return this.http.get<Form>(`${this.apiUrl}/${id}`);
  // }
  // updateData(form: Form): Observable<Form> {
  //   return this.http.put<Form>(`${this.apiUrl}/${form.id}`, form);
  // }
