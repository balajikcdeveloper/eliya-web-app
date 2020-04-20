import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ErrorPageComponent } from './components/micro/error-page.component';
import { MaterialModule } from './material.module';
import { NotificationService } from './services/notification.service';

@NgModule({
  declarations: [ErrorPageComponent],
  imports: [CommonModule, MaterialModule, SharedRoutingModule],
  exports: [ErrorPageComponent],
  providers: [NotificationService],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
    };
  }
}
