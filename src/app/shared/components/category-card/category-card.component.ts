import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoryService } from 'src/app/category/services/category.service';
import { NotificationService } from '../../services/general/notification.service';
import { HttpStatusCode } from '../../../constents/http-status-code';
import { Router } from '@angular/router';
import { EditCategoryComponent } from 'src/app/category/edit-category/edit-category.component';
import { ConfirmDeleteComponent } from '../confirm-delete/confirm-delete.component';
import { yearsPerPage } from '@angular/material/datepicker';
import { CommonService } from '../../services/common.service';
import { nextTick } from 'process';
import { ResourceLoader } from '@angular/compiler';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss'],
})
export class CategoryCardComponent implements OnInit {
  data;
  @Output() isDelete = new EventEmitter<boolean>();
  @Input()
  category: {
    name: string;
    icon: string;
    isActive: boolean;
  };
  constructor(
    
    public dialog: MatDialog,
    private router:Router,
    private categoryService: CategoryService,
    private commonService:CommonService,
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
    
    const dialogRef = this.dialog.open(ConfirmDeleteComponent,{
      width:'400px',
      data:{category}
    });


     this.commonService.subsVar = this.commonService
     .invokeConfirmComponent.subscribe((flag) =>{
       if(flag == 1 ){
        this.categoryService.deleteCategory(category).subscribe((res: any) => {
          this.data = res;
          
          if (this.data.status == HttpStatusCode.OK) {
            
            this.notficationService.showSuccessMessage(
              'Category Deleted Sucessfully'
            );
            
            this.isDelete.emit(true);
            this.dialog.closeAll();
            location.reload();
          }
        });
       }
       
     })
    
}

    // this.categoryService.deleteCategory(category).subscribe((res: any) => {
    //   if (res.status == HttpStatusCode.OK) {
        
    //     this.notficationService.showSuccessMessage(
    //       'Category Deleted Sucessfully'
    //     );
    //     this.isDelete.emit(true);
    //   }
    // });

  }
