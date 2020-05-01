import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { EditWalletComponent } from '../../../wallets/edit-wallet/edit-wallet.component';
import { MatDialog } from '@angular/material/dialog';
import { Wallet } from '../../../wallets/models/wallet-dto';
import { Router } from '@angular/router';
import { WalletService } from '../../../wallets/services/wallet.service';
import { NotificationService } from '../../services/general/notification.service';
import {
  Location,
  LocationStrategy,
  PathLocationStrategy,
} from '@angular/common';
@Component({
  selector: 'app-wallets-card',
  templateUrl: './wallets-card.component.html',
  styleUrls: ['./wallets-card.component.scss'],
})
export class WalletsCardComponent implements OnInit {
  @Output() isDelete = new EventEmitter<boolean>();
  @Input()
  wallet: {
    name: string;
    amount: number;
    isActive: boolean;
  };
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private walletService: WalletService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {}
  openEditWallet(wallet) {
    const dialogRef = this.dialog.open(EditWalletComponent, {
      width: '400px',
      data: { wallet },
    });
    dialogRef.afterClosed().subscribe((wallet: any) => {
      if (wallet) this.wallet = wallet;
    });
  }
  deleteWallet(wallet) {
    wallet.isActive = false;
    this.walletService.updateWallet(wallet).subscribe((res: any) => {
      if (res.status) {
        this.notificationService.showSuccessMessage(
          'Wallet deleted succesfully'
        );
        this.isDelete.emit(true);
      }
    });
  }
}
