import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from '../models/login-dto';
import { Wallet } from '../models/wallet-dto';
import { CookieService } from 'ngx-cookie-service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loginUrl: string = 'http://localhost:3000/api/v1/auth/login';
  walletUrl: string = 'http://localhost:3000/api/v1/wallets';
  constructor(private http: HttpClient, private cookieService: CookieService) {}

  loginUser(user): Observable<Login> {
    return this.http.post<Login>(this.loginUrl, user, httpOptions);
  }
  getWallets(): Observable<Wallet> {
    const authHttpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.cookieService.get('token'),
      }),
    };

    return this.http.get<Wallet>(this.walletUrl, authHttpOptions);
  }
}
