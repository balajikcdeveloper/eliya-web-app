import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Category } from '../models/category-dto';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/general/notification.service';
import { CategoryIconComponent } from '../category-icon/category-icon.component';
import { MatDialog } from '@angular/material/dialog';
import { isDefined } from '@angular/compiler/src/util';
import { HttpStatusCode } from 'src/app/constents/http-status-code';

import { CommonService } from 'src/app/shared/services/common.service';
import { result } from 'lodash';
import { BindingFlags } from '@angular/compiler/src/core';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent implements OnInit {
  flag;
  @Output() isAdd = new EventEmitter<boolean>();
  categoryList: Category = new Category();
  constructor(
    private categoryService: CategoryService,
    private notificationService: NotificationService,
    private router: Router,
    public dialog: MatDialog,
    private commonService: CommonService
  ) { }

  ngOnInit(): void {

  }



  public addCategory(category) {
    var name = category.name;
    var icon = category.icon;
    this.commonService.validateName(name, icon);
    this.flag = this.commonService.flag;
    if (this.flag == 1) {
      this.categoryService.addCategory(category).subscribe((result: any) => {
        if (result.status === HttpStatusCode.Created) {

          this.notificationService.showSuccessMessage(
            'Category created successfully'
          );
          this.isAdd.emit(true);
          category.name = "";
          category.icon = undefined;
        }
      });
    }
    if (this.flag == 0) {
      return false;
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
