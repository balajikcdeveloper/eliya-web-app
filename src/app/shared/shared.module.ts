import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ErrorPageComponent } from './components/micro/error-page.component';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [ErrorPageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedRoutingModule
  ],
  exports: [
    ErrorPageComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}
