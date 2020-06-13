import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Wallet } from 'src/app/login/models/wallet-dto';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  walletApiUri: string = environment.baseUrl + '/wallets?isActive=true';
  categoryApiUri: string = environment.baseUrl + '/categories?isActive=true';
  httpOptions: any;
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private cookieService: CookieService
  ) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.authService.getToken(),
      }),
    };
  }

  getWallets() {
    return this.http.get(
      this.walletApiUri + '&userId=' + this.cookieService.get('userId'),
      this.httpOptions
    );
  }
  getCategory() {
    return this.http.get(
      this.categoryApiUri + '&userId=' + this.cookieService.get('userId'),
      this.httpOptions
    );
  }
}
