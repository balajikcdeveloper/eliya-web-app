import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EditBudgetComponent } from 'src/app/budget/edit-budget/edit-budget.component';

@Component({
  selector: 'app-budget-card',
  templateUrl: './budget-card.component.html',
  styleUrls: ['./budget-card.component.scss']
})
export class BudgetCardComponent implements OnInit {
  @Input()
  category: {
    _id:string;
    name: string;
   icon:string;
   isActive:boolean;
  };
  @Input()
  budget: {
    amount:string;
   isActive:boolean;
  };
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {}
    openEditBudget(budget) {
      const dialogRef = this.dialog.open(EditBudgetComponent, {
        width: '400px',
        data: { budget },
      });
      dialogRef.afterClosed().subscribe((budget: any) => {
        if (budget) {
          this.category = budget;
        }
      });
    
  }

}
