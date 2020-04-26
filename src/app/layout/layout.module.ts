import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { WalletsModule } from '../wallets/wallets.module';



@NgModule({
  declarations: [LayoutComponent, HeaderComponent, SidenavComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    WalletsModule,
    LayoutRoutingModule,
    SharedModule
  ],
  exports: [HeaderComponent,SidenavComponent]
})
export class LayoutModule { }
