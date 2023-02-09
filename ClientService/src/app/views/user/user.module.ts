import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user.routing';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ComponentsStateButtonModule } from 'src/app/components/state-button/components.state-button.module';
import {UserConfigrationModule} from '../app/configuration/user/user.module';
import { AddNewModalContainersModule } from 'src/app/containers/add-new-modal/add-new-modal.containers.module';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ForgotPasswordComponent, UserComponent, ResetPasswordComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    SimpleNotificationsModule.forRoot(),
    ComponentsStateButtonModule,
    AddNewModalContainersModule,
    UserConfigrationModule,
    NgSelectModule
  ],
})
export class UserModule { }
