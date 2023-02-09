import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import { IsalesQuotation } from '../../../../data/sales-quotations';
import { SalesQuotationsService } from './sales-quotations.service';

@Component({
  selector: 'app-sales-quotations',
  templateUrl: './sales-quotations.component.html',
})
export class SalesQuotationsComponent implements OnInit ,AfterViewInit {
  salesQuotes: IsalesQuotation[]=[];
  columns: string[]  = ['filter','id','status', 'date','netAmount'];
  headersFilters :string[]=['_filter','_id','_status', '_date','_netAmount'];
  dataSource=new MatTableDataSource<IsalesQuotation>();
  toggleFilters = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  idFilter = new FormControl();
  statusFilter = new FormControl();
  dateFilter = new FormControl();
  netAmountFilter = new FormControl();

  filteredValues = {
    id: '', status: '', date: '',netAmount: ''
  };
  globalFilter = '';

  itemsPerPage = 10;
  itemOptionsPerPage = [5, 10, 20];
  selected = [];
  SelectionType = SelectionType;
  selectAllState = '';
  isLoading: boolean;

  rows: IsalesQuotation[];
  temp=[];

  constructor(private salesQuotesService: SalesQuotationsService) {
  }

  ngOnInit() {
    let user = JSON.parse(localStorage.getItem('user'));
    let BYD = JSON.parse(localStorage.getItem('BYD'));
    BYD.password = atob(BYD.password)
    this.salesQuotesService.getSalesQuotes(BYD, user).subscribe((i) => {
      this.salesQuotes = i;
      console.log("sales",this.salesQuotes);
        this.dataSource.data=i;
    });
    this.idFilter.valueChanges.subscribe((idFilterValue) => {
      this.filteredValues.id = idFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });

    this.statusFilter.valueChanges.subscribe((statusFilterValue) => {
      this.filteredValues.status = statusFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });
    this.dateFilter.valueChanges.subscribe((dateFilterValue) => {
      this.filteredValues.date = dateFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });

    this.netAmountFilter.valueChanges.subscribe((netAmountFilterValue) => {
      this.filteredValues.netAmount = netAmountFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });

    this.dataSource.filterPredicate = this.createFilter();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  updateFilter(filter): void {
    this.globalFilter=filter;
    this.dataSource.filter = JSON.stringify(this.filteredValues);
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }
  createFilter() {
    const filterFunction = (data:IsalesQuotation, filter:string):
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
      return data.id.toString().toLowerCase().indexOf(searchTerms.id) !== -1
      && data.status.toLowerCase().indexOf(searchTerms.status) !== -1
        && data.date.toLowerCase().indexOf(searchTerms.date) !== -1
        && data.netAmount.toString().toLowerCase().indexOf(searchTerms.netAmount) ! ==-1;
    }
    return filterFunction;
  }
}
