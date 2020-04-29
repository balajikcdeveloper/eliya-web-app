import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletsListComponent } from './wallets-list/wallets-list.component';
import { AddWalletComponent } from './add-wallet/add-wallet.component';
import { SharedModule } from '../shared/shared.module';
import { WalletsRoutingModule } from './wallets-routing.module';
import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [WalletsListComponent, AddWalletComponent],
  imports: [CommonModule,FormsModule, MaterialModule, SharedModule,WalletsRoutingModule],
  exports: [WalletsListComponent, AddWalletComponent]   
})
export class WalletsModule { }