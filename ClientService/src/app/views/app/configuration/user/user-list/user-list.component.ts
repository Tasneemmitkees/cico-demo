import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../../../../data/user';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AddNewUserComponent } from '../../../../../containers/add-new-modal/add-new-user/add-new-user.component';
import { UserListService } from './user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit ,AfterViewInit {
  columns: string[]  = ['filter','_id','username', 'role','status','delete'];
  headersFilters :string[]=['_filter','id','_username', '_role','_status','_delete'];
  dataSource= new MatTableDataSource<User>();
  toggleFilters = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  idFilter = new FormControl('');
  userNameFilter = new FormControl('');
  roleFilter = new FormControl('');
  statusFilter = new FormControl('');

  filteredValues = {
    _id: '', status: '', username: '',
    role: '',
  };
  globalFilter = '';

  @ViewChild('addNewUserModalRef', { static: true })
  addNewUserModalRef: AddNewUserComponent;
  rows:User[]=[];

  temp = [];
  modalRef: BsModalRef;
  constructor(
    private userListService: UserListService,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    let user = JSON.parse(localStorage.getItem('user'));
    console.log(user.tenantId);
    this.userListService.getAllUsers(user.tenantId).subscribe((i) => {
      this.rows = i;
      this.dataSource.data=i;
    console.log("user",i);

    console.log("datasource of table",this.dataSource.data,"rows",this.rows, "temp",this.temp,"length of data",this.dataSource.data.length)

    });
    this.idFilter.valueChanges.subscribe((idFilterValue) => {
      this.filteredValues._id = idFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });
    this.userNameFilter.valueChanges.subscribe((userNameFilterValue) => {
      this.filteredValues.username = userNameFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });

    this.roleFilter.valueChanges.subscribe((roleFilterValue) => {
      this.filteredValues.role = roleFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });
    this.statusFilter.valueChanges.subscribe((statusFilterValue) => {
      this.filteredValues.status = statusFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });

    this.dataSource.filterPredicate = this.createFilter();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  showAddNewModal(): void {
    this.addNewUserModalRef.showModal();
  }
  //open delete modal
  onDeleteRow(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }
  // remove user
  remove(rowIndex: number, userID:number) {
    let user = JSON.parse(localStorage.getItem('user'));
    this.userListService.deleteUser(user.tenantId, userID.toString()).subscribe((i) => {
      console.log(i);
      this.dataSource.data.splice(rowIndex,1);
      this.dataSource.data = [...this.dataSource.data]
      this.modalRef.hide();
    });
  }
  // cancel
  decline(): void {
    this.modalRef.hide();
  }
  addUser(user:any) {
    this.dataSource.data=[...this.dataSource.data,user];
    console.log("add",this.dataSource.data)
  }
  updateFilter(filter): void {
    this.globalFilter=filter;
    this.dataSource.filter = JSON.stringify(this.filteredValues);
  }
  createFilter() {
    const filterFunction = (data:User, filter:string):
    boolean => {
      var globalMatch = !this.globalFilter;
      if (this.globalFilter) {
        // search all text fields
        globalMatch = data.username.toString().trim().toLowerCase().indexOf(this.globalFilter.toLocaleLowerCase()) !== -1;
      }
      if (!globalMatch) {
        return;
      }
      let searchTerms = JSON.parse(filter);
      return data._id.toString().toLowerCase().indexOf(searchTerms._id) !== -1
      && data.status.toLowerCase().indexOf(searchTerms.status) !== -1
        && data.username.toLowerCase().indexOf(searchTerms.username) !== -1
        && data.role.toLowerCase().indexOf(searchTerms.role) !== -1;
    }
    return filterFunction;
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }
}

