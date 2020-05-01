import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Wallet } from '../models/wallet-dto';
import { WalletService } from '../services/wallet.service';
import { HttpStatusCode } from '../../constents/http-status-code';
import { NotificationService } from '../../shared/services/general/notification.service';

@Component({
  selector: 'app-edit-wallet',
  templateUrl: './edit-wallet.component.html',
  styleUrls: ['./edit-wallet.component.scss'],
})
export class EditWalletComponent implements OnInit {
  walletList: Wallet = new Wallet();
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { wallet: Wallet },
    private walletService: WalletService,
    private dialogRef: MatDialogRef<EditWalletComponent>,
    private notificationService: NotificationService
  ) {
    this.walletList = Object.assign({}, data.wallet);
  }

  ngOnInit(): void {}
  updateWallet(wallet) {
    this.walletService.updateWallet(wallet).subscribe((result: any) => {
      if (result.status === HttpStatusCode.OK) {
        this.notificationService.showSuccessMessage(
          'Updated wallet succesfully'
        );
        this.dialogRef.close(result.data);
      }
    });
  }
}
