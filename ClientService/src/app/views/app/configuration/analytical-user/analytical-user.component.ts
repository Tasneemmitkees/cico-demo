import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NotificationsService, NotificationType } from 'angular2-notifications';
import { BydConfigurationService } from '../byd-configration/byd-configuration.service';

@Component({
  selector: 'app-analytical-user',
  templateUrl: './analytical-user.component.html',
})
export class AnalyticalUserComponent implements OnInit {
  config: any = {
    technicalUsername: '',
    technicalPassword: '',
  };
  constructor(
    private bydConfigurationService: BydConfigurationService,
    private notifications: NotificationsService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    let user = JSON.parse(localStorage.getItem('user'));
    console.log(user.tenantId);
    this.bydConfigurationService
      .getConfig(user.tenantId)
      .subscribe((config) => {
        console.log(config);

        this.config = config;
      });
  }
  save() {
    let user = JSON.parse(localStorage.getItem('user'));
    console.log(this.config);
    this.bydConfigurationService
      .addConfig(user.tenantId, this.config)
      .subscribe((config) => {
        console.log(config);
        localStorage.setItem('BYD', JSON.stringify(config));

        // this.config = config
        // this.config = config
      });
    // for attachment
    // let temp = this.files.toString().split(',');
    // let split1 = temp[0].split(':');
    // let split2 = split1[1].split(';');
    // console.log("original",split2);
    // console.log("temp",temp[0]);

    this.notifications.create(
      this.translate.instant('alert.success'),
      'Sucessfully',
      NotificationType.Success,
      { timeOut: 3000, showProgressBar: true }
    );
  }
}
