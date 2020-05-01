import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { Wallet } from '../models/wallet-dto';

@Injectable({
  providedIn: 'root',
})
export class WalletService {
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
    return this.http.get(
      this.walletApiUri + '?isActive=true',
      this.httpOptions
    );
  }
  updateWallet(wallet: any) {
    return this.http.put(
      this.walletApiUri + '/' + wallet._id,
      wallet,
      this.httpOptions
    );
  }
}
