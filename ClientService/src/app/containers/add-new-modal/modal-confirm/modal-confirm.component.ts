import { Component, Input, Output, TemplateRef,EventEmitter, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
})
export class ModalConfirmComponent {
  displayOptionsCollapsed = false;

  @Input() showOrderBy = true;
  @Input() showSearch = true;
  @Input() showItemsPerPage = true;
  @Input() showDisplayMode = true;
  @Input() displayMode = 'list';
  @Input() selectAllState = '';
  @Input() itemsPerPage = 10;
  @Input() itemOptionsPerPage = [5, 10, 20];
  @Input() itemOrder = { label: 'Product Name', value: 'title' };
  @Input()  itemOptionsOrders = [
    { label: 'Product Name', value: 'title' },
    { label: 'Category', value: 'category' },
    { label: 'Status', value: 'status' }];

  @Output() changeDisplayMode: EventEmitter<string> = new EventEmitter<string>();
  @Output() addNewItem: EventEmitter<any> = new EventEmitter();
  @Output() selectAllChange: EventEmitter<any> = new EventEmitter();
  @Output() searchKeyUp: EventEmitter<any> = new EventEmitter();
  @Output() itemsPerPageChange: EventEmitter<any> = new EventEmitter();
  @Output() changeOrderBy: EventEmitter<any> = new EventEmitter();

  @ViewChild('search') search: any;
  constructor() { }



  onSelectDisplayMode(mode: string): void {
    this.changeDisplayMode.emit(mode);
  }
  onAddNewItem(): void {
    this.addNewItem.emit(null);
  }
  selectAll(event): void  {
    this.selectAllChange.emit(event);
  }
  onChangeItemsPerPage(item): void  {
    this.itemsPerPageChange.emit(item);
  }

  onChangeOrderBy(item): void  {
    this.itemOrder = item;
    this.changeOrderBy.emit(item);
  }

  onSearchKeyUp($event): void {
    this.searchKeyUp.emit($event);
  }
}
