import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from '../models/login-dto';
import { Wallet } from '../models/wallet-dto';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';

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
  logoutUrl: string = environment.baseUrl + '/auth/logout';
  walletUrl: string = environment.baseUrl + '/wallets';
  constructor(private http: HttpClient, private cookieService: CookieService) {}

  loginUser(user): Observable<Login> {
    return this.http.post<Login>(this.loginUrl, user, httpOptions);
  }
  logoutUser() {
    return this.http.get(this.logoutUrl, httpOptions);
    // this.cookieService.delete('token');
    // return this.isAuthenticated();
  }
  getWallets(): Observable<Wallet> {
    const authHttpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.getToken(),
      }),
    };
    return this.http.get<Wallet>(this.walletUrl, authHttpOptions);
  }
  public isAuthenticated(): boolean {
    return this.getToken() !== null;
  }
  setToken(token: string) {
    this.cookieService.set('token', token);
  }
  getToken() {
    return this.cookieService.get('token');
  }
}
