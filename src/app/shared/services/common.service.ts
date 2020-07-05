import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Wallet } from 'src/app/login/models/wallet-dto';
import { Observable, of } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { abort } from 'process';
import { NotificationService } from 'src/app/shared/services/general/notification.service';


@Injectable({
  providedIn: 'root',
})
export class CommonService {
  flag;
  walletApiUri: string = environment.baseUrl + '/wallets?isActive=true';
  categoryApiUri: string = environment.baseUrl + '/categories?isActive=true';
  httpOptions: any;
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private notificationService: NotificationService,
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
  validateName(name, icon) {
    switch (true) {

      case name == null && icon == null:
        this.notificationService.showErrorMessage('Please Enter name And select Icon!!');
        this.flag = 0;
        break;
      case name == null:
        this.notificationService.showErrorMessage('Please enter the name!!');
        this.flag = 0;
        break;
      case name.length < 4:
        this.notificationService.showErrorMessage('The name should be atleast 4 letters!');
        this.flag = 0;
        break;
      case name != null && !isNaN(name):
        this.notificationService.showErrorMessage('Enter only alphanumeric characters!!!');
        this.flag = 0;
        break;
      case icon == null:
        this.notificationService.showErrorMessage('Please the select Icon!!');
        this.flag = 0;
        break;

      case icon != null && name != null && isNaN(name) && name.length > 4:
        this.flag = 1;
        break;

      default:
        this.notificationService.showErrorMessage('Something Went Wrong try again later...');
        this.flag = 0;
    }
  }
}
