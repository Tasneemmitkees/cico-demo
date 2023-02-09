import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
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
import { ComponentsPagesModule } from '../../components/pages/components.pages.module';
import { ComponentsCardsModule } from '../../components/cards/components.cards.module';
import { ComponentsPlayerModule } from '../../components/player/components.player.module';
import { RatingModule } from 'ngx-bootstrap/rating';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {AddIdentificationComponent} from './add-identification/add-identification.component';
import {AddAddressComponent} from './add-address/add-address.component';
import {AddAttachmentComponent} from './add-attachment/add-attachment.component';
import {AddItemInvoiceComponent} from './add-item-invoice/add-item-invoice.component';
import {AddProductItemComponent} from './add-product-item/add-product-item.component';
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
    AddIdentificationComponent,
    AddAddressComponent,
    AddAttachmentComponent,
    AddItemInvoiceComponent,
    AddProductItemComponent
  ],
  exports: [
    AddIdentificationComponent,
    AddAddressComponent,
    AddAttachmentComponent,
    AddItemInvoiceComponent,
    AddProductItemComponent
  ]
})
export class SupplierModalContainersModule { }
