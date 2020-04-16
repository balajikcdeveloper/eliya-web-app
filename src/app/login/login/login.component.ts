import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login-dto';
import { AuthService } from '../services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login: Login = new Login();
  txtUsername: string;
  txtPassword: string;
  constructor(
    private authService: AuthService,
    private cookieService: CookieService
  ) {}

  ngOnInit() {}
  loginCheck(user: Login) {
    this.authService.loginUser(user).subscribe((result) => {
      this.cookieService.set('token', result.token);
      console.log(result);
      this.getWallets();
    });
  }
  getWallets() {
    this.authService.getWallets().subscribe((result) => {
      console.log(result);
    });
  }
}
