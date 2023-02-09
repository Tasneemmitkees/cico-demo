import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotificationsService, NotificationType } from 'angular2-notifications';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { environment } from 'src/environments/environment';
import { AnyNsRecord } from 'dns';
import { BydConfigurationService } from '../../app/configuration/byd-configration/byd-configuration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  @ViewChild('loginForm') loginForm: NgForm;
  usernameModel = 'Joseph';
  passwordModel = 'joseph';

  buttonDisabled = false;
  buttonState = '';

  constructor(
    private authService: AuthService,
    private notifications: NotificationsService,
    private router: Router,
    private bydConfigurationService: BydConfigurationService
  ) {}

  onSubmit(): void {
    console.log(this.loginForm.valid);
    console.log(this.buttonDisabled);

    if (this.loginForm.valid) {
      // if (this.buttonDisabled) {

      this.buttonDisabled = true;
      // this.buttonState = 'show-spinner';
      this.authService.signIn(this.loginForm.value).subscribe(
        (response: any) => {
          console.log(response);
          const user = response;
          if (user) {
            localStorage.setItem('token', user.token);
            // localStorage.setItem('userName', user.userName);
            // this.alertify.success('Login Successful');
            // this.router.navigate(['/']);
            this.bydConfigurationService.getConfig('T5').subscribe((config) => {
              console.log(config);

              // this.config = config;
              config.password = btoa(config.password);

              localStorage.setItem('BYD', JSON.stringify(config));
            });
            console.log(user);
            if (user.role == 'admin') {
              this.authService.setUser(1)
              this.router.navigate(["app/configuration/bydConfigration"]);
            } else {
              if (user.type == 'individual') {
                this.authService.setUser(0)
                this.router.navigate([environment.adminRoot]);
              } else {
                this.authService.setUser(2)
                this.router.navigate([environment.adminRoot]);

              }
            }
          }
        },
        (err: any) => {
          console.log(err.error.error);
          // this.router.navigate([environment.adminRoot]);
          // })
          //.catch((error) => {
          this.buttonDisabled = false;
          this.buttonState = '';
          this.notifications.create(
            'Login Error',
            err.error.error,
            NotificationType.Error,
            {
              // position: ["bottom", "left"],
              timeOut: 5000,
              showProgressBar: true,
              pauseOnHover: true,
              clickToClose: true,
              animate: 'fromRight',
            }
          );
        }
      );
      // });
      // }
    }
  }
}
