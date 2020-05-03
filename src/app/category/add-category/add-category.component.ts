import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Category } from '../models/category-dto';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/general/notification.service';
import { HttpStatusCode } from 'src/app/constents/http-status-code';
import { CategoryIconComponent } from '../category-icon/category-icon.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent implements OnInit {
  @Output() isAdd = new EventEmitter<boolean>();
  categoryList: Category = new Category();
  constructor(
    private categoryService: CategoryService,
    private notificationService: NotificationService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  addCategory(category) {
    if (
      category.name &&
      category.icon !== undefined &&
      category.icon !== true
    ) {
      this.categoryService.addCategory(category).subscribe((result: any) => {
        if (result.status === HttpStatusCode.Created) {
          this.notificationService.showSuccessMessage(
            'Category created successfully'
          );
          this.isAdd.emit(true);
        }
      });
    } else {
      this.notificationService.showErrorMessage(
        'please enter name & select icon'
      );
    }
  }
  selectIcon() {
    const dialogRef = this.dialog.open(CategoryIconComponent, {
      width: '50%',
      data: {},
    });
    dialogRef.afterClosed().subscribe((icon: any) => {
      if (icon) {
        this.categoryList.icon = icon;
      }
    });
  }
}
