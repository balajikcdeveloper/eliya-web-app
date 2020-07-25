import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category/services/category.service';
import { NotificationService } from 'src/app/shared/services/general/notification.service';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.scss']
})
export class BudgetListComponent implements OnInit {
  categoryList:any;
  constructor(private categoryService:CategoryService,
    private notificationService:NotificationService,) { }

  ngOnInit(): void {
    this.getCategoryList();
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
