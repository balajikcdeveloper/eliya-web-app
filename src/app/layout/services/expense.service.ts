import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { Expense } from '../models/expense-dto';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  expenseApiUri: string = environment.baseUrl + '/expenses';
  httpOptions: any;
  constructor(private http: HttpClient, private authService: AuthService) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.authService.getToken(),
      }),
    };
  }

  getExpenses() {
    return this.http.get(
      this.expenseApiUri + '?isActive=true',
      this.httpOptions
    );
  }

  addExpense(expense) {
    return this.http.post(this.expenseApiUri, expense, this.httpOptions);
  }
  updateExpense(expense: any) {
    return this.http.put(
      this.expenseApiUri + '/' + expense._id,
      expense,
      this.httpOptions
    );
  }
  deleteExpense(expense: any) {
    return this.http.delete(
      this.expenseApiUri + '/' + expense._id,
      this.httpOptions
    );
  }
}
