import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { from } from 'rxjs';
import { CommonService } from 'src/app/shared/services/common.service';
import { NotificationService } from 'src/app/shared/services/general/notification.service';
import { WalletService } from '../services/wallet.service';

@Component({
  selector: 'app-wallets-list',
  templateUrl: './wallets-list.component.html',
  styleUrls: ['./wallets-list.component.scss'],
})
export class WalletsListComponent implements OnInit {
  @Output() amount = new EventEmitter<number>();
  @Output() name = new EventEmitter<string>();
  walletsList: any;

  constructor(
    private walletService: WalletService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.getWalletsList();
  }
  isDelete(isDeleteStatus: boolean) {
    if (isDeleteStatus) {
      this.getWalletsList();
    }
  }
  getWalletsList() {
    this.walletService.getWallets().subscribe(
      (result: any) => {
        this.walletsList = result.data;
      },
      (error) => {
        this.notificationService.showErrorMessage(
          'User not authenticated! please login.'
        );
      }
    );
  }
}
