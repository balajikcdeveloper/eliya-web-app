import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { Login } from '../login/models/login-dto';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loginUrl: string = environment.baseUrl + '/auth/login';
  constructor(private http: HttpClient, private cookieService: CookieService) {}

  loginUser(user): Observable<Login> {
    return this.http.post<Login>(this.loginUrl, user, httpOptions);
  }
  removeToken() {
    this.cookieService.delete('token');
    this.cookieService.delete('name');
    this.cookieService.delete('userId');
  }
  public isAuthenticated(): boolean {
    return this.checkToken();
  }
  setToken(token: string) {
    this.cookieService.set('token', token);
  }
  getToken() {
    return this.cookieService.get('token');
  }
  checkToken() {
    return this.cookieService.check('token');
  }
}
