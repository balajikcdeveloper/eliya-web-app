import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CategoryService } from 'src/app/category/services/category.service';
import { NotificationService } from 'src/app/shared/services/general/notification.service';
import { result } from 'lodash';
import { BudgetService } from '../services/budget.service';
import { HttpStatusCode } from 'src/app/constents/http-status-code';
import { Category } from 'src/app/category/models/category-dto';
import { Budget } from '../models/budget-dto';

@Component({
  selector: 'app-add-budget',
  templateUrl: './add-budget.component.html',
  styleUrls: ['./add-budget.component.scss']
})
export class AddBudgetComponent implements OnInit {
  @Output() isAdd = new EventEmitter<boolean>();
  categoryList:any;
  id:any;
  categoryL: Category = new Category();
  budgetList: Budget = new Budget();
  constructor(private categoryService:CategoryService,
    private budgetService:BudgetService,
    private notificationService:NotificationService) { }

  ngOnInit(): void {
    this.getCategoryList();
    
  }
  getId(category){
this.id=category._id;

  }

  addBudget(budget){
    var categoryId=this.id;
   this.budgetService.addBudget(categoryId,budget).subscribe((result: any) => {
    if (result.status === HttpStatusCode.Created) {

      this.notificationService.showSuccessMessage(
        'budget created successfully'
      );
      
     
    }
  });

  }
  getCategoryList() {
    this.categoryService.getCategory().subscribe(
      (result: any) => {
        this.categoryList = result.data;
      },
      (error) => {
        this.notificationService.showErrorMessage(
          'User not authenticated! please login.'
        );
      }
    );
  }
  
}
