import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Wallet } from '../models/wallet-dto';
import { WalletService } from '../services/wallet.service';
import { HttpStatusCode } from '../../constents/http-status-code';
import { NotificationService } from '../../shared/services/general/notification.service';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-add-wallet',
  templateUrl: './add-wallet.component.html',
  styleUrls: ['./add-wallet.component.scss'],
})
export class AddWalletComponent implements OnInit {
  flag;
  @Output() isAdd = new EventEmitter<boolean>();
  walletList: Wallet = new Wallet();
  constructor(
    private walletService: WalletService,
    private notificationService: NotificationService,
    private router: Router,
    private commonService :CommonService
  ) {}

  ngOnInit(): void {}
  addWallet(wallet) {
var name = wallet.name;
var amount = wallet.amount;


this.commonService.validateWallet(name,amount)
this.flag = this.commonService.flag;
if(this.flag == 1){
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
}
