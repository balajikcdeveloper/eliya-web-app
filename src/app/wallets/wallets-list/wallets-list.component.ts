import { Component, OnInit, Output, EventEmitter } from '@angular/core';
  import { from } from 'rxjs';
import { CommonService } from 'src/app/shared/services/common.service';
import { NotificationService } from 'src/app/shared/services/general/notification.service';
  
@Component({
  selector: 'app-wallets-list',
  templateUrl: './wallets-list.component.html',
  styleUrls: ['./wallets-list.component.scss']
})

export class WalletsListComponent implements OnInit {
  @Output() amount = new EventEmitter<number>();
  @Output() name = new EventEmitter<string>();
  walletsList: any;
  
  constructor(
    private commonService: CommonService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.getWalletsList();
  }

  getWalletsList() {
    this.commonService.getWallets().subscribe(
      (result: any) => {
        this.walletsList = result.data, function (wallet: any){
            return wallet;
          
        }
    console.log(result);
      },
      (error) => {
        this.notificationService.showErrorMessage(
          'User not authenticated! please login.'
        );
      }
    );
  }
  
}

