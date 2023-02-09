import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SalesOrder } from '../../../../data/sales-order';
import { SalesOrderService } from './sales-order.service';

@Component({
  selector: 'app-sales-order',
  templateUrl: './sales-order.component.html'
})
export class SalesOrderComponent implements OnInit , AfterViewInit {

  salesOrderFilter = new FormControl();
  statusFilter = new FormControl();
  postingDateFilter = new FormControl();
  requestedDateFilter = new FormControl();
  externalReferenceFilter = new FormControl();
  totalNetFilter = new FormControl();

  filteredValues = {
    salesOrderNumber: '', status: '', postingDate: '',
    requestedDate: '',externalReference:'',totalNet:''
  };
  globalFilter = '';
  columns: string[]  = ['filter','salesOrderNumber', 'status', 'postingDate', 'requestedDate','externalReference','totalNet'];
  headersFilters :string[]  = ['_filter','_salesOrderNumber', '_status', '_postingDate', '_requestedDate','_externalReference','_totalNet'];
  toggleFilters = false;
  dataSource= new MatTableDataSource<SalesOrder>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  rows:SalesOrder[];

  salesOrders:SalesOrder[];

  constructor(private SalesOrderService:SalesOrderService) {
  }

  ngOnInit() {
    let user = JSON.parse(localStorage.getItem('user'));
    let BYD = JSON.parse(localStorage.getItem('BYD'));
    BYD.password = atob(BYD.password);
    this.SalesOrderService.getSalesOrder(user, BYD).subscribe((i) => {
      this.salesOrders= i;
      this.dataSource.data=i;
      console.log("sales",i)
    });
    this.dataSource.filterPredicate = this.createFilter();
    this.salesOrderFilter.valueChanges.subscribe((salesorderFilterValue) => {
      this.filteredValues.salesOrderNumber = salesorderFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });

    this.statusFilter.valueChanges.subscribe((statusValue) => {
      this.filteredValues.status = statusValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });
    this.externalReferenceFilter.valueChanges.subscribe((externalReferenceFilterValue) => {
      this.filteredValues.externalReference = externalReferenceFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });
    this.postingDateFilter.valueChanges.subscribe((postingFilterValue) => {
      this.filteredValues.postingDate = postingFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });

    this.requestedDateFilter.valueChanges.subscribe((requestedFilterValue) => {
      this.filteredValues.requestedDate = requestedFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });


    this.totalNetFilter.valueChanges.subscribe((totalNetFilterValue) => {
      this.filteredValues.totalNet = totalNetFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  updateFilter(filter): void {
    this.globalFilter=filter;
    this.dataSource.filter = JSON.stringify(this.filteredValues);
  }
  createFilter() {
    const filterFunction = (data:SalesOrder, filter:string):
    boolean => {
      var globalMatch = !this.globalFilter;
      if (this.globalFilter) {
        // search all text fields
        globalMatch = data.status.toString().trim().toLowerCase().indexOf(this.globalFilter.toLocaleLowerCase()) !== -1;
      }
      if (!globalMatch) {
        return;
      }
      let searchTerms = JSON.parse(filter);
      return data.id.toString().toLowerCase().indexOf(searchTerms.salesOrderNumber) !== -1
        && data.status.toString().toLowerCase().indexOf(searchTerms.status) !== -1
        && data.postingDate.toString().toLowerCase().indexOf(searchTerms.postingDate) !== -1
        && data.requestedDate.toLowerCase().indexOf(searchTerms.requestedDate) !== -1
        && data.externalReference.toString().toLowerCase().indexOf(searchTerms.externalReference) !== -1
        && data.totalNet.toString().toLowerCase().indexOf(searchTerms.totalNet) !== -1;
    }
    return filterFunction;
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }

}
