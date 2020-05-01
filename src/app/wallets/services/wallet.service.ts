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

  addWallet(wallet) {
    return this.http.post(this.walletApiUri, wallet, this.httpOptions);
  }
  updateWallet(wallet: any) {
    return this.http.put(
      this.walletApiUri + '/' + wallet._id,
      wallet,
      this.httpOptions
    );
  }
  deleteWallet(wallet: any) {
    return this.http.delete(
      this.walletApiUri + '/' + wallet._id,
      this.httpOptions
    );
  }
}
