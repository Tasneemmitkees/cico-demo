import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserComponent } from './user.component';
import { UserRoutingModule } from './user.routing';
import {NewUserComponent}from './new-user/new-user.component';
import {UserListComponent} from './user-list/user-list.component';
import { LayoutContainersModule } from '../../../../containers/layout/layout.containers.module';
import { TranslateModule } from '@ngx-translate/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PagesContainersModule } from '../../../../containers/pages/pages.containers.module';
import {UserDetailComponent} from './user-detail/user-detail.component'
import { AddNewModalContainersModule } from '../../../../containers/add-new-modal/add-new-modal.containers.module';
import { UserListService } from './user-list/user-list.service';
import { UserDetailService } from './user-detail/user-detail.service';
import { NewUserService } from './new-user/new-user.service';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SortablejsModule } from 'ngx-sortablejs';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { HotkeyModule } from 'angular2-hotkeys';
import { NgSelectModule } from '@ng-select/ng-select';
import { MaterialExampleModule } from '../../../../../material.module';

@NgModule({
  declarations: [
    UserComponent,
    NewUserComponent,
    UserListComponent,
    UserDetailComponent,
    ],
  imports: [
    MaterialExampleModule,
    CommonModule,
    UserRoutingModule,
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
    BsDropdownModule.forRoot(),
    ReactiveFormsModule,
    NgSelectModule
  ],
  providers: [
    UserListService,
    UserDetailService,
    NewUserService
  ]
})
export class UserConfigrationModule { }
