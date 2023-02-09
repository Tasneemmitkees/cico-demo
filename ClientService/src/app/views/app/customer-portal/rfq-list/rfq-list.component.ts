import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { rfq } from 'src/app/data/RFQ';
import { SalesQuotationsService } from '../sales-quotations/sales-quotations.service';

@Component({
  selector: 'app-rfq-list',
  templateUrl: './rfq-list.component.html'
})
export class RfqListComponent implements OnInit , AfterViewInit{

  rows:rfq[];
  columns: string[]  = ['filter','id','status','date'];
  headersFilters :string[]=['_filter','_id', '_status','_date'];
  dataSource=new MatTableDataSource<rfq>();
  toggleFilters = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  idFilter = new FormControl('');
  statusFilter = new FormControl('');
  dateFilter = new FormControl('');

  filteredValues = {
    id: '', status: '', date: ''
  };
  globalFilter = '';
  constructor(private salesQuotesService: SalesQuotationsService) { }

  ngOnInit() {
    let user = JSON.parse(localStorage.getItem('user'));
    let BYD = JSON.parse(localStorage.getItem('BYD'));
    BYD.password = atob(BYD.password)
    this.salesQuotesService.getRFQ(BYD, user).subscribe((data)=>{
      console.log(data);
      this.rows=data;
      this.dataSource.data=data;
    });
    this.idFilter.valueChanges.subscribe((idFilterValue) => {
      this.filteredValues.id = idFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });
    this.statusFilter.valueChanges.subscribe((statusFilterValue) => {
      this.filteredValues.status = statusFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });
    this.dateFilter.valueChanges.subscribe((datesFilterValue) => {
      this.filteredValues.date = datesFilterValue;
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
    const filterFunction = (data:rfq, filter:string):
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
        && data.date.toLowerCase().indexOf(searchTerms.data) !== -1
    }
    return filterFunction;
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }

}
