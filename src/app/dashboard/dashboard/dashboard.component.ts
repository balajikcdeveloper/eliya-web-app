import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../shared/services/common.service';
import * as _ from 'lodash';
import { NotificationService } from '../../shared/services/general/notification.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  total: number;
  constructor(
    private commonService: CommonService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.getWallets();
  }

  getWallets() {
    this.commonService.getWallets().subscribe(
      (result: any) => {
        this.total = _.sumBy(result.data, function (wallet: any) {
          return wallet.amount;
        });
        console.log(result);
      },
      (error) => {
        this.notificationService.showErrorMessage(
          'User not authenticated! pleaae login.'
        );
      }
    );
  }
}
