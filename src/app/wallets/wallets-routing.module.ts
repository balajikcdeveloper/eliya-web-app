import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from '../shared/components/micro/error-page.component';
import { WalletsListComponent } from './wallets-list/wallets-list.component';

const routes: Routes = [
  {
    path: '',
    component: WalletsListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletsRoutingModule {}
