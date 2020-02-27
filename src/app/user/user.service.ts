import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return of([{id: 1, name: 'emilia'}, {id: 2, name: 'natalia'}]);
  }

  getAllDb(): Observable<any> {
    return this.http.get('http://[::1]:3000/users');
  }
}
