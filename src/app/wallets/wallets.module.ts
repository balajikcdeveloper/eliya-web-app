import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletsListComponent } from './wallets-list/wallets-list.component';
import { AddWalletComponent } from './add-wallet/add-wallet.component';
import { SharedModule } from '../shared/shared.module';
import { WalletsRoutingModule } from './wallets-routing.module';
import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';
import { WalletService } from './services/wallet.service';
import { EditWalletComponent } from './edit-wallet/edit-wallet.component';
import { CommonService } from '../shared/services/common.service';

@NgModule({
  declarations: [WalletsListComponent, AddWalletComponent, EditWalletComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    SharedModule,
    WalletsRoutingModule,
  ],
  exports: [WalletsListComponent, AddWalletComponent],
  providers: [WalletService,CommonService],
  entryComponents: [EditWalletComponent],
})
export class WalletsModule {}
