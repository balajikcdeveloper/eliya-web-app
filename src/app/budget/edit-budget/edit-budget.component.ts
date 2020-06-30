import { Component, OnInit, Inject } from '@angular/core';
import { Budget } from '../models/budget-dto';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-budget',
  templateUrl: './edit-budget.component.html',
  styleUrls: ['./edit-budget.component.scss']
})
export class EditBudgetComponent implements OnInit {
  budgetList:Budget = new Budget();
  constructor(  @Inject(MAT_DIALOG_DATA) public data: {budget:Budget},
  public dialog: MatDialog) {
    this.budgetList = Object.assign({},data.budget);
   }

  ngOnInit(): void {
  }

}
