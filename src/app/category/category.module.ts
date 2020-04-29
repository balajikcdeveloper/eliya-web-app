import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [AddCategoryComponent, CategoryListComponent],
  imports: [CommonModule,FormsModule, MaterialModule, SharedModule,CategoryRoutingModule ],
  exports:[CategoryListComponent,AddCategoryComponent]
})
export class CategoryModule { }
