import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './shared/components/micro/error-page.component';


const routes: Routes = [{
  path: 'app',
  loadChildren: () => import('../app/layout/layout.module').then(module => module.LayoutModule)
  },
  {
    path: 'login',
    loadChildren: () => import('../app/login/login.module').then(module => module.LoginModule)
    },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: ErrorPageComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
