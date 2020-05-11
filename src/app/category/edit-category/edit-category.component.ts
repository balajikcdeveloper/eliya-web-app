import { Component, OnInit,Inject,EventEmitter, Output } from '@angular/core';
import { HttpStatusCode } from '../../constents/http-status-code';
import { NotificationService } from '../../shared/services/general/notification.service';
import { CategoryService } from '../services/category.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Category } from '../models/category-dto';
import { CategoryIconComponent } from '../category-icon/category-icon.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {

  categoryList:Category = new Category();
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {category:Category},
    private categoryService:CategoryService,
    private dialogRef: MatDialogRef<EditCategoryComponent>,
    private notificationService:NotificationService,
    private router : Router,
    public dialog: MatDialog
  ) {
    this.categoryList = Object.assign({},data.category);
   }

  ngOnInit(): void {}
  updateCategory(category) {
    this.categoryService.updateCategory(category).subscribe((result: any) => {
      if (result.status === HttpStatusCode.OK) {
        this.notificationService.showSuccessMessage(
          'Updated Category succesfully'
        );
        this.dialogRef.close(result.data);
      }
    });
  }
  updateIcon() {
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

