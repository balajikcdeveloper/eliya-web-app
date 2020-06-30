import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetRoutingModule } from './budget-routing.module';
import { AddBudgetComponent } from './add-budget/add-budget.component';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { EditBudgetComponent } from './edit-budget/edit-budget.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AddBudgetComponent, BudgetListComponent, EditBudgetComponent],
  imports: [
    CommonModule,
    BudgetRoutingModule,
    SharedModule,
    MaterialModule,
    FormsModule
  ],
  exports:[AddBudgetComponent,BudgetListComponent],
})
export class BudgetModule { }
