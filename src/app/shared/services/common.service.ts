import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Wallet } from 'src/app/login/models/wallet-dto';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  walletApiUri: string = environment.baseUrl + '/wallets';
  httpOptions: any;
  constructor(private http: HttpClient, private authService: AuthService) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.authService.getToken(),
      }),
    };
  }

  getWallets() {
    return this.http.get(this.walletApiUri, this.httpOptions);
  }
}
