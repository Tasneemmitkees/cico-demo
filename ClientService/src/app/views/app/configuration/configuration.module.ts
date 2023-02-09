import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationComponent } from './configuration.component';
import { ConfigurationRoutingModule } from './configuration.routing';
import {BydConfigrationComponent} from './byd-configration/byd-configration.component';
import { LayoutContainersModule } from '../../../containers/layout/layout.containers.module';
import { BydConfigurationService } from './byd-configration/byd-configuration.service'
import { TranslateModule } from '@ngx-translate/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { PagesContainersModule } from '../../../containers/pages/pages.containers.module';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { HotkeyModule } from 'angular2-hotkeys';
import { SortablejsModule } from 'ngx-sortablejs';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AddNewModalContainersModule } from '../../../containers/add-new-modal/add-new-modal.containers.module';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { UserConfigrationModule } from './user/user.module';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { MaterialExampleModule } from '../../../../material.module';
import {AnalyticalUserComponent} from './analytical-user/analytical-user.component';
@NgModule({
  declarations: [
    ConfigurationComponent,
    BydConfigrationComponent,
    AnalyticalUserComponent],
  imports: [
    CommonModule,
    ConfigurationRoutingModule,
    TranslateModule,
    TabsModule.forRoot(),
    LayoutContainersModule,
    BsDropdownModule.forRoot(),
    PagesContainersModule,
    NgxDatatableModule,
    PaginationModule.forRoot(),
    AddNewModalContainersModule,
    ModalModule.forRoot(),
    PopoverModule.forRoot(),
    TooltipModule.forRoot(),
    SharedModule,
    FormsModule,
    SortablejsModule,
    HotkeyModule.forRoot(),
    CollapseModule.forRoot(),
    ProgressbarModule.forRoot(),
    UserConfigrationModule,
    DropzoneModule,
    SimpleNotificationsModule.forRoot(),
    MaterialExampleModule
  ],
  providers:[
    BydConfigurationService
  ]
})
export class ConfigurationModule { }
