import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login-dto';
import { AuthService } from '../../services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { NotificationService } from '../../shared/services/general/notification.service';

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
      (result: any) => {
        if (result && result.token) {
          this.authService.setToken(result.token);
          this.cookieService.set('name', result.data.name);
          console.log(result);
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
}
