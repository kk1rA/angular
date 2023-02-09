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
  ) {
    localStorage.setItem('isAuth', 'false');
   }

  addUser(user: any): Observable<any> {
    return this.http.post(`${this.url}/account/reg`, user);
  }

  authUser(user: any): Observable<any> {
    return this.http.post(`${this.url}/account/auth`, user);
  }

  logOut(): void {
    localStorage.clear();
  }

  storeUser(token: string, user: any): void {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('isAuth', 'true');
  }

}
