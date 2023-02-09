import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BydConfigrationComponent } from './byd-configration/byd-configration.component';
import { ConfigurationComponent } from './configuration.component';
import {UserDetailComponent} from'../configuration/user/user-detail/user-detail.component';
import { AnalyticalUserComponent } from './analytical-user/analytical-user.component';

const routes: Routes = [
  {
    path: '', component: ConfigurationComponent,
    children:[
      { path: '', redirectTo: 'bydConfigration', pathMatch: 'full' },
      { path: 'bydConfigration', component: BydConfigrationComponent},
      { path: 'analyticalUser', component: AnalyticalUserComponent},
      { path: 'user',loadChildren:()=>import('./user/user.module').
      then((m)=>m.UserConfigrationModule) },
      {path: 'userDetail/:id',component:UserDetailComponent}
    ]
  }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConfigurationRoutingModule { }



