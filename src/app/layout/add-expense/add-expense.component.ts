import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpStatusCode } from '../../constents/http-status-code';
import { NotificationService } from '../../shared/services/general/notification.service';
import { Router } from '@angular/router';
import { Expense } from '../models/expense-dto';
import { ExpenseService } from '../services/expense.service';
import { Wallet } from 'src/app/login/models/wallet-dto';
import { CommonService } from '../../shared/services/common.service';
import { Category } from '../../category/models/category-dto';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss'],
})
export class AddExpenseComponent implements OnInit {
  @Output() isAdd = new EventEmitter<boolean>();
  expenseList: Expense = new Expense();
  walletList: Wallet = new Wallet();
  categoryList: Category = new Category();
  constructor(
    private expenseService: ExpenseService,
    private notificationService: NotificationService,
    private commonService: CommonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getWallets();
    this.getCategories();
  }
  getWallets() {
    this.commonService.getWallets().subscribe((result: any) => {
      if (result.data) this.walletList = result.data;
    });
  }
  getCategories() {
    this.commonService.getCategory().subscribe((result: any) => {
      if (result.data) this.categoryList = result.data;
    });
  }
  addExpense(expense) {
    this.expenseService.addExpense(expense).subscribe((result: any) => {
      if (result.status === HttpStatusCode.Created) {
        this.notificationService.showSuccessMessage(
          'Wallet created successfully'
        );
        this.expenseList.dateTime = null;
        this.expenseList.description = '';
        this.expenseList.amount = null;
        this.isAdd.emit(true);
      }
    });
  }
}
