import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AddExpenseComponent } from '../add-expense/add-expense.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  name: string;
  constructor(
    public dialog: MatDialog,
    private authService: AuthService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  ngOnInit() {
    this.name = this.cookieService.get('name');
  }
  logoutUser() {
    this.authService.removeToken();
    this.router.navigateByUrl('/login/auth');
  }
  openAddExpense() {
    const dialogRef = this.dialog.open(AddExpenseComponent, {
      width: '30%',
    });
    dialogRef.afterClosed().subscribe((add: any) => {
      if (add) {
        //this.category = category;
      }
    });
  }
}
