import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { NotificationService } from 'src/app/shared/services/general/notification.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
@Output() name = new EventEmitter<string>();
categoryList: any;
  constructor(
    private categoryService : CategoryService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.getCategoryList();
  }
  isDelete(isDeleteStatus: boolean) {
    if (isDeleteStatus) {
      this.getCategoryList();
    }
  }
  isAdd(isAddStatus: boolean) {
    if (isAddStatus) {
      this.getCategoryList();
    }
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
