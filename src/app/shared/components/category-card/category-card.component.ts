import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoryService } from 'src/app/category/services/category.service';
import { NotificationService } from '../../services/general/notification.service';
import { HttpStatusCode } from '../../../constents/http-status-code';
import { Router } from '@angular/router';
import { EditCategoryComponent } from 'src/app/category/edit-category/edit-category.component';
@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss'],
})
export class CategoryCardComponent implements OnInit {
  @Output() isDelete = new EventEmitter<boolean>();
  @Input()
  category: {
    name: string;
    icon: string;
    isActive: boolean;
  };
  constructor(
    public dialog: MatDialog,
    private categoryService: CategoryService,
    private notficationService: NotificationService
  ) {}

  ngOnInit(): void {}
  openEditCategory(category) {
    const dialogRef = this.dialog.open(EditCategoryComponent, {
      width: '400px',
      data: { category },
    });
    dialogRef.afterClosed().subscribe((category: any) => {
      if (category) {
        this.category = category;
      }
    });
  }
  deleteCategory(category) {
    this.categoryService.deleteCategory(category).subscribe((res: any) => {
      if (res.status == HttpStatusCode.OK) {
        this.notficationService.showSuccessMessage(
          'Category Deleted Sucessfully'
        );
        this.isDelete.emit(true);
      }
    });
  }
}
