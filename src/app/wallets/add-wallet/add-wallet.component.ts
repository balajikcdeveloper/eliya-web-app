import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Wallet } from '../models/wallet-dto';
import { WalletService } from '../services/wallet.service';
import { HttpStatusCode } from '../../constents/http-status-code';
import { NotificationService } from '../../shared/services/general/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-wallet',
  templateUrl: './add-wallet.component.html',
  styleUrls: ['./add-wallet.component.scss'],
})
export class AddWalletComponent implements OnInit {
  @Output() isAdd = new EventEmitter<boolean>();
  walletList: Wallet = new Wallet();
  constructor(
    private walletService: WalletService,
    private notificationService: NotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  addWallet(wallet) {
    this.walletService.addWallet(wallet).subscribe((result: any) => {
      if (result.status === HttpStatusCode.Created) {
        this.notificationService.showSuccessMessage(
          'Wallet created successfully'
        );
        this.walletList.name = this.walletList.description = '';
        this.walletList.amount = null;
        this.isAdd.emit(true);
      }
    });
  }
}
