import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from '../shared/components/micro/error-page.component';
import { LayoutComponent } from './layout.component';
import { AppGuard } from './app.guard';




const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: LayoutComponent,
    canActivate: [AppGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../dashboard/dashboard.module').then(
            (module) => module.DashboardModule
          ),
      },
      { path: '**', component: ErrorPageComponent },
    ],
  },
  {
    path: 'wallets',
    canActivate: [AppGuard],
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../wallets/wallets.module').then(
            (module) => module.WalletsModule
          ),
      },
      { path: '**', component: ErrorPageComponent },
    ],
  },
  {
    path: 'category',
    canActivate: [AppGuard],
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../category/category.module').then(
            (module) => module.CategoryModule
          ),
      },
      { path: '**', component: ErrorPageComponent },
    ],
  },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
