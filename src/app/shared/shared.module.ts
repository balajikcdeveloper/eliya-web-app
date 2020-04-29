import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ErrorPageComponent } from './components/micro/error-page.component';
import { MaterialModule } from './material.module';
import { NotificationService } from './services/general/notification.service';
import { CommonService } from './services/common.service';
import { WalletsCardComponent } from './components/wallets-card/wallets-card.component';
import { from } from 'rxjs';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { IndianCurrencyPipe } from './pipes/indian-currency.pipe';

@NgModule({
  declarations: [
    ErrorPageComponent,
    WalletsCardComponent,
    CategoryCardComponent,
    IndianCurrencyPipe,
  ],
  imports: [CommonModule, MaterialModule, SharedRoutingModule],
  exports: [
    ErrorPageComponent,
    WalletsCardComponent,
    CategoryCardComponent,
    IndianCurrencyPipe,
  ],
  providers: [NotificationService, CommonService],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
    };
  }
}
