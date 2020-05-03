import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { CategoryService } from './services/category.service';
import { CategoryIconComponent } from './category-icon/category-icon.component';



@NgModule({
  declarations: [AddCategoryComponent, CategoryListComponent, EditCategoryComponent, CategoryIconComponent],
  imports: [CommonModule,FormsModule, MaterialModule, SharedModule,CategoryRoutingModule ],
  exports:[CategoryListComponent,AddCategoryComponent],
  providers:[CategoryService],
  entryComponents: [EditCategoryComponent],
})
export class CategoryModule { }
