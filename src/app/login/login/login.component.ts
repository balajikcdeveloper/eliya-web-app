import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login-dto';
import { AuthService } from '../services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { NotificationService } from '../../shared/services/notification.service';
import { Router } from '@angular/router';

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
    private cookieService: CookieService,
    private notificationService: NotificationService,
    private router: Router
  ) {}

  ngOnInit() {}
  loginCheck(user: Login) {
    this.authService.loginUser(user).subscribe(
      (result) => {
        if (result && result.token) {
          this.authService.setToken(result.token);
          console.log(result);
          this.notificationService.showSuccessMessage('Login Successful');
          this.router.navigateByUrl('/app/home');
        }
      },
      (error) => {
        this.notificationService.showErrorMessage(
          'Please provide a valid username and password'
        );
      }
    );
  }
  getWallets() {
    this.authService.getWallets().subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        this.notificationService.showErrorMessage(
          'User not authenticated! pleaae login.'
        );
      }
    );
  }
  logout() {
    this.authService.logoutUser().subscribe((res) => {
      if (res) this.notificationService.showSuccessMessage('Logout Successful');
    });
  }
}
