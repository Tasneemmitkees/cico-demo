import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotificationsService, NotificationType } from 'angular2-notifications';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from './login.service';
import { Time } from '@angular/common';

export interface IClock {
  employeeID: string;
  dateTime: string;
  terminalID: string;
  status: string;
  date: string;
  time: string;
}
export interface IEmployee {
  id:number;
  assignmentId: string;
  timestamp: string;
  terminalId: string;
  typeCode: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent {
  @ViewChild('loginForm') loginForm: NgForm;

  list: IClock[] = [];
  finalList: IClock[] = [];
  sending: any[];
  listOfOneEmployee: IEmployee[] = [];
  employeeList:IEmployee[]=[];
  pushClicked = false;
  constructor(private demoservice: LoginService, private notifications: NotificationsService, private translate: TranslateService) { }

  onSubmit():void{
    if(this.pushClicked){
      console.log("push")
    }else{
      console.log("send");
    }
  }

  send(): void {
   // this.pushClicked=false;
    if (this.loginForm.valid) {
      console.log("demo value", this.loginForm.value);

      // call func
      let event: IEmployee = {
        id:2,
        assignmentId: this.loginForm.value.employeeID,
        timestamp: `${this.loginForm.value.date}T${this.loginForm.value.time}:21+02:00`,
        typeCode: this.loginForm.value.radio,
        terminalId: this.loginForm.value.terminalID,
      }
      this.listOfOneEmployee.push(event);
      this.demoservice.postEvent(event).subscribe((i) => {
        console.log(i)
        if (i == "success") {
          this.notifications.create(this.translate.instant('alert.success'),
            this.translate.instant("Send Sucessfully"),
            NotificationType.Success, { timeOut: 3000, showProgressBar: true });
        }
        else if (i == "error") {
          this.notifications.create(this.translate.instant('alert.error'),
            this.translate.instant('error'),
            NotificationType.Error, { timeOut: 3000, showProgressBar: true });
        }
      });
    }
  }
  push(): void {
   // this.pushClicked=true;
    if (this.loginForm.valid) {
      console.log("demo value", this.loginForm.value);
      let event: IClock = {
        employeeID: this.loginForm.value.employeeID,
        dateTime: `${this.loginForm.value.date}T${this.loginForm.value.time}:21+02:00`,
        status: this.loginForm.value.radio,
        terminalID: this.loginForm.value.terminalID,
        date: this.loginForm.value.date,
        time: this.loginForm.value.time
      }
      this.list.push(event);
      console.log("list of data", this.list);
    }
  }
  sendList(): void {
    this.finalList = this.list;
    console.log("table list", this.finalList);
    const group = this.finalList.reduce((res: any, entry: any) => {
      const { date,
        dateTime,
        employeeID,
        status,
        terminalID,
        time
      } = entry;
      const key = `${employeeID}_${date}_${status}`

      if (!res[key]) {
        res[key] = { employeeID, date, terminalID, status, times: [{ time, dateTime }] }
      } else {
        res[key].times.push({ time, dateTime })
      }
      return res
    }, {})
    console.log("data after structured", group);

    const output = Object.values(group)
  //  console.log("array of objects", output);

    this.sending = output;
    this.sending.forEach(x => {
      if (x.status === "P10") {
        x.times.sort(function (a, b) {
          return a.time.localeCompare(b.time)
        });
        let lowest = x.times[0];
        console.log("lowest  of P10", lowest);
        let event: IEmployee = {
          id:2,
          assignmentId:x.employeeID,
          terminalId:x.terminalID,
          typeCode:x.status,
          timestamp:x.times[0].dateTime
        }
        this.employeeList.push(event);
        console.log("employee list ",this.employeeList);
      }
      else if(x.status === "P20")
      {
        x.times.sort(function (a, b) {
          return b.time.localeCompare(a.time)
        });
        console.log("time arr",x.times);
        let highest:any=x.times[0];
        console.log("highest",highest);
        let event: IEmployee = {
          id:2,
          assignmentId:x.employeeID,
          terminalId:x.terminalID,
          typeCode:x.status,
          timestamp:x.times[0].dateTime
        }
        this.employeeList.push(event);
        console.log("employee list ",this.employeeList);
      }
      
    });
    this.demoservice.postEvent(this.employeeList).subscribe((i) => {
      console.log(i)
      if (i == "success") {
        this.notifications.create(this.translate.instant('alert.success'),
          this.translate.instant("Send Sucessfully"),
          NotificationType.Success, { timeOut: 3000, showProgressBar: true });
      }
      else if (i == "error") {
        this.notifications.create(this.translate.instant('alert.error'),
          this.translate.instant('error'),
          NotificationType.Error, { timeOut: 3000, showProgressBar: true });
      }
    });
  }

}

