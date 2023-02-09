import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotificationsService, NotificationType } from 'angular2-notifications';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';
import {LoginService} from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  @ViewChild('loginForm') loginForm: NgForm;

  buttonDisabled = false;
  buttonState = '';

  constructor(private demoservice: LoginService, private notifications: NotificationsService, private router: Router,private translate: TranslateService) { }


  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log("demo value",this.loginForm.value);
      this.notifications.create(this.translate.instant('alert.success'),
      this.translate.instant("Send Sucessfully"),
      NotificationType.Success, { timeOut: 3000, showProgressBar: true });
      // call func

      let event:any={
        employeeID:this.loginForm.value.employeeID,
        dateTime:`${this.loginForm.value.date}T${this.loginForm.value.time}:21+02:00`,
        status:this.loginForm.value.radio,
      }
    this.demoservice.postEvent(event).subscribe((i)=>{
      console.log(i)
    })

    }
  }
}
// onSubmit(): void {
//   if (this.loginForm.valid) {
//     if (this.buttonDisabled) {

//       this.buttonDisabled = true;
//       this.buttonState = 'show-spinner';
//       this.authService.signIn(this.loginForm.value).then(() => {
//         this.router.navigate([environment.adminRoot]);
//       }).catch((error) => {
//         this.buttonDisabled = false;
//         this.buttonState = '';
//         this.notifications.create('Error', error.message, NotificationType.Bare, {
//           theClass: 'outline primary',
//           timeOut: 6000,
//           showProgressBar: false
//         });
//       });
//     }
//   }
// }
