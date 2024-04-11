import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigResolveService } from './shared/service/config-resolve.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
    resolve: {config: ConfigResolveService}
  },
  {
    path: 'user',
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule),
    resolve: {config: ConfigResolveService}
  },
  {
    path: 'accessManager',
    loadChildren: () => import('./modules/access-manager/access-manager.module').then(m => m.AccessManagerModule),
    resolve: {config: ConfigResolveService}
  },
  {
    path: '**', redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
