import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {AddNewIdentificationComponent} from './add-new-identification/add-new-identification.component';
import {AddNewUserComponent} from './add-new-user/add-new-user.component';
import {AddNewAddressComponent} from './add-new-address/add-new-address.component';
import {AddNewAttachmentComponent} from './add-new-attachment/add-new-attachment.component';
import {AddItemRfqComponent} from './add-item-rfq/add-item-rfq.component';
import {AddItemOrderComponent} from './add-item-order/add-item-order.component';
import {ModalConfirmComponent} from './modal-confirm/modal-confirm.component';
import { SharedModule } from '../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { SortablejsModule } from 'ngx-sortablejs';
import { LayoutContainersModule } from '../layout/layout.containers.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LightboxModule } from 'ngx-lightbox';
import { ComponentsPagesModule } from 'src/app/components/pages/components.pages.module';
import { ComponentsCardsModule } from 'src/app/components/cards/components.cards.module';
import { ComponentsPlayerModule } from 'src/app/components/player/components.player.module';
import { RatingModule } from 'ngx-bootstrap/rating';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {AddIndividualAddressComponent} from './add-individual-address/add-individual-address.component';
import {AddIndividualIdentificationComponent} from './add-individual-identification/add-individual-identification.component';
import {AddIndividualAttachmentComponent} from './add-individual-attachment/add-individual-attachment.component';
import {AddSalesOrderAttachmentComponent} from './add-sales-order-attachment/add-sales-order-attachment.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    CollapseModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutContainersModule,
    NgSelectModule,
    SortablejsModule,
    ModalModule.forRoot(),
    PopoverModule.forRoot(),
    TooltipModule.forRoot(),
    PaginationModule.forRoot(),
    DropzoneModule,
    NgxDatatableModule,
    LightboxModule,
    ComponentsPagesModule,
    ComponentsCardsModule,
    ComponentsPlayerModule,
    RatingModule.forRoot(),
    TabsModule.forRoot(),
    AccordionModule.forRoot(),
    BsDropdownModule.forRoot()

  ],
  declarations: [
    AddNewIdentificationComponent,
    AddNewUserComponent,
    AddNewAddressComponent,
    AddNewAttachmentComponent,
    ModalConfirmComponent,
    AddItemRfqComponent,
    AddItemOrderComponent,
    AddIndividualAddressComponent,
    AddIndividualIdentificationComponent,
    AddIndividualAttachmentComponent,
    AddSalesOrderAttachmentComponent
  ],
  exports: [
    AddNewIdentificationComponent,
    AddNewUserComponent,
    AddNewAddressComponent,
    AddNewAttachmentComponent,
    ModalConfirmComponent,
    AddItemRfqComponent,
    AddItemOrderComponent,
    AddIndividualAddressComponent,
    AddIndividualIdentificationComponent,
    AddIndividualAttachmentComponent,
    AddSalesOrderAttachmentComponent
  ]
})
export class AddNewModalContainersModule { }
