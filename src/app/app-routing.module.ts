import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './shared/components/micro/error-page.component';
import { AppGuard } from './layout/app.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('../app/login/login.module').then((module) => module.LoginModule),
  },
  {
    path: 'app',
    canActivate: [AppGuard],
    loadChildren: () =>
      import('../app/layout/layout.module').then(
        (module) => module.LayoutModule
      ),
  },
  {
    path: '**',
    component: ErrorPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
