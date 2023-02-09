import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import invoiceData, { CustomerInvoice } from '../../../../data/customer-invoice';
import { CustomerInvoiceService } from './customer-invoice.service';

@Component({
  selector: 'app-customer-invoice',
  templateUrl: './customer-invoice.component.html',
})
export class CustomerInvoiceComponent implements OnInit,AfterViewInit {
  rows: any;
  @ViewChild(DatatableComponent) table: DatatableComponent;

  ColumnMode = ColumnMode;
  customerInvoices: CustomerInvoice[]=[];
  columns: string[]  = ['filter','ID','type', 'date','status','externalReference','netTotal'];
  headersFilters :string[]=['_filter','_ID','_type', '_date','_status','_externalReference','_netTotal'];
  dataSource=new MatTableDataSource<CustomerInvoice>();
  toggleFilters = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  idFilter = new FormControl('');
  typeFilter = new FormControl('');
  dateFilter = new FormControl('');
  statusFilter = new FormControl('');
  externalReferenceFilter = new FormControl();
  netTotalFilter = new FormControl();

  filteredValues = {
    id: '', status: '', type: '',
    date: '',externalReference:'',netTotal:'',
  };
  globalFilter = '';

  constructor(private customerInvoiceService: CustomerInvoiceService) {}

  ngOnInit() {
    this.customerInvoiceService.getCustomerInvoice().subscribe((i) => {
      this.customerInvoices = i;
      console.log("invoices",this.customerInvoices);
      this.dataSource.data=i;
    });

    this.dataSource.filterPredicate = this.createFilter();
    this.idFilter.valueChanges.subscribe((idFilterValue) => {
      this.filteredValues.id = idFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });

    this.typeFilter.valueChanges.subscribe((typeFilterValue) => {
      this.filteredValues.type = typeFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });

    this.dateFilter.valueChanges.subscribe((dateFilterValue) => {
      this.filteredValues.date = dateFilterValue;
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
    this.netTotalFilter.valueChanges.subscribe((netTotalFilterValue) => {
      this.filteredValues.netTotal = netTotalFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  createFilter() {
    const filterFunction = (data:CustomerInvoice, filter:string):
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
      return data.ID.toString().toLowerCase().indexOf(searchTerms.ID) !== -1
      && data.type.toString().toLowerCase().indexOf(searchTerms.type) !== -1
      && data.date.toLowerCase().indexOf(searchTerms.date) !== -1
      && data.status.toString().toLowerCase().indexOf(searchTerms.status) !== -1
      && data.externalReference.toString().toLowerCase().indexOf(searchTerms.externalReference) !== -1
      && data.netTotal.toString().toLowerCase().indexOf(searchTerms.netTotal) !== -1;
    }
    return filterFunction;
  }
  updateFilter(filter): void {
    this.globalFilter=filter;
    this.dataSource.filter = JSON.stringify(this.filteredValues);
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }
}
