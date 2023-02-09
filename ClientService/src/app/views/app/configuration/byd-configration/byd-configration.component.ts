import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { NotificationsService, NotificationType } from 'angular2-notifications';
import { BydConfigurationService } from './byd-configuration.service';

@Component({
  selector: 'app-byd-configraation',
  templateUrl: './byd-configration.component.html',
})
export class BydConfigrationComponent implements OnInit {
  config: any = {
    URL: '',
    username: '',
    password: '',
  };
  configForDropzone = {
    url: 'https://httpbin.org/post',
    thumbnailWidth: 160,
    // tslint:disable-next-line: max-line-length
    previewTemplate: '<div class="dz-preview dz-file-preview mb-3"><div class="d-flex flex-row "><div class="p-0 w-30 position-relative"><div class="dz-error-mark"><span><i></i></span></div><div class="dz-success-mark"><span><i></i></span></div><div class="preview-container"><img data-dz-thumbnail class="img-thumbnail border-0" /><i class="simple-icon-doc preview-icon" ></i></div></div><div class="pl-3 pt-2 pr-2 pb-1 w-70 dz-details position-relative"><div><span data-dz-name></span></div><div class="text-primary text-extra-small" data-dz-size /><div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div><div class="dz-error-message"><span data-dz-errormessage></span></div></div></div><a href="#/" class="remove" data-dz-remove><i class="glyph-icon simple-icon-trash"></i></a></div>'
  };
  testChecked: boolean;
  colorradio: String;
  @ViewChild('bydForm') bydForm: NgForm;
  files:File[]=[];
  constructor(
    private bydConfigurationService: BydConfigurationService,
    private notifications: NotificationsService,
    private translate: TranslateService) {}

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

  clicked() {
    this.bydConfigurationService.ping(this.config).subscribe((config) => {
      console.log(config);
      // this.config = config
      if (config.status == 'OK') {
        const element = (document.getElementById(
          'activeTest'
        ).style.backgroundColor = 'green');
      } else {
        const element = (document.getElementById(
          'activeTest'
        ).style.backgroundColor = 'red');
      }
    });
  }

  save() {
    let user = JSON.parse(localStorage.getItem('user'));
    console.log(this.config);
    this.bydConfigurationService
      .addConfig(user.tenantId, this.config)
      .subscribe((config) => {
        console.log(config);
        console.log(btoa(config.password));
        config.password = btoa(config.password);
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

      this.notifications.create(this.translate.instant('alert.success'),
      "Sucessfully",
      NotificationType.Success, { timeOut: 3000, showProgressBar: true }
      );
  }
  onUploadError(event): void {
    console.log("Error",event);
  }

  onUploadSuccess(event): void {
    console.log("Success",event);
    console.log("file",event[1].files.file);
    this.files=event[1].files.file;
  }
}
