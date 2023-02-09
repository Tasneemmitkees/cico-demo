import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';
import { UserRole } from './shared/auth.roles';

const routes: Routes = [
  { path: '', loadChildren: () => import('./views/views.module').then(m => m.ViewsModule)  ,
  // canActivate: [AuthGuard],
  // canActivateChild: [AuthGuard]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
