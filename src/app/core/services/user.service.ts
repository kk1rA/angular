import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
  ) { }

  addUser(user: any): Observable<any> {
    return this.http.post(`${this.url}/account/reg`, user);
  }
}
