import { Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import currency from 'src/app/data/currency';
import { NewUserService } from 'src/app/views/app/configuration/user/new-user/new-user.service';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html'
})
export class AddNewUserComponent implements OnInit {
  modalRef: BsModalRef;
  config = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-right'
  };
  @ViewChild('template', { static: true }) template: TemplateRef<any>;
  @Output() newUser = new EventEmitter<any>();

  newUserForm:FormGroup;
  public edit: boolean = true;
  isCustomerShown: boolean;
  businessPartnerID = [];
  allCustomers;
  salesUnits = [];
  priceLists = [];
  distributionChannels: any = {};
  submitted=false;
  currencyList=currency;

  constructor(private modalService: BsModalService,
              private fb:FormBuilder,
              private router: Router,
              private newUserService: NewUserService) { }

  ngOnInit() {
    this.isCustomerShown = false;
    this.createForm();
    this.setRoleValidators();
    let user = JSON.parse(localStorage.getItem('user'));

    this.newUserService.getNextId(user.tenantId).subscribe((i) => {
      console.log(i);
      this.newUserForm.patchValue({
        id: i,
      });
    });
  }
  showModal(): void {
    this.modalRef = this.modalService.show(this.template, this.config);
  }
  onSubmit(){
    this.submitted=true;
    if (this.newUserForm.valid) {
      let user = JSON.parse(localStorage.getItem('user'));
      console.log("id",this.newUserForm.getRawValue().id)
      let body = {
        _id:this.newUserForm.getRawValue().id,
        username: this.newUserForm.value.userName,
        password: this.newUserForm.value.password,
        role: this.newUserForm.value.role,
        status: 'active',
        bydesignUser: this.newUserForm.value.businessPartnerID,
        bydesignUserType:this.newUserForm.value.businessPartnerID.customerType,
        salesOrgnaisation: this.newUserForm.value.salesUnit,
        distributionChannel: this.newUserForm.value.distributionChannel,
        priceList: this.newUserForm.value.priceList,
        currency:this.newUserForm.value.currency
      };
      this.newUser.emit(body);
      this.newUserService.createUser(user.tenantId, body).subscribe((i) => {
        console.log(i);
        this.router.navigate(['/app/configuration/user/userList']);
      });
      console.log('New User', body);
      this.modalRef.hide();
    }
  }
  createForm() {
    this.newUserForm= this.fb.group({
      id: new FormControl({ value: '', disabled: this.edit }),
      userName: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
      role: new FormControl('',[Validators.required]),
      salesUnit: new FormControl(''),
      distributionChannel: new FormControl(''),
      priceList: new FormControl(''),
      businessPartnerID: new FormControl(''),
      customerType: new FormControl(''),
      currency:new FormControl('',[Validators.required]),
    });
  }
  setRoleValidators() {
    const salesUnitContol = this.newUserForm.get('salesUnit');
    const distributionChannelContol = this.newUserForm.get('distributionChannel');
    const priceListContol = this.newUserForm.get('priceList');
    const customerTypeContol = this.newUserForm.get('customerType');
    const businessPartnerIDContol = this.newUserForm.get('businessPartnerID');

    this.newUserForm.get('role').valueChanges
      .subscribe(role => {

        if (role === 'customer') {
          salesUnitContol.setValidators([Validators.required]);
          distributionChannelContol.setValidators([Validators.required]);
          priceListContol.setValidators([Validators.required]);
          customerTypeContol.setValidators([Validators.required]);
          businessPartnerIDContol.setValidators([Validators.required]);
        }

        if (role === 'supplier') {
          salesUnitContol.setValidators(null);
          distributionChannelContol.setValidators(null);
          priceListContol.setValidators(null);
          customerTypeContol.setValidators(null);
          businessPartnerIDContol.setValidators(null);
        }

        salesUnitContol.updateValueAndValidity();
        distributionChannelContol.updateValueAndValidity();
        priceListContol.updateValueAndValidity();
        customerTypeContol.updateValueAndValidity();
        businessPartnerIDContol.updateValueAndValidity();
      });
  }
  onRoleOptionsSelected(value: string) {
    console.log('the selected value is ' + value);
    if (value === 'customer') {
      this.isCustomerShown = true;
      this.newUserService.getAllPricelists().subscribe((i) => {
        // console.log(i);
        this.priceLists = i;
        // this.allCustomers = i;
        // this.businessPartnerID = i;
      });
    } else {
      this.isCustomerShown = false;
    }
  }
  onTypeOptionsSelected(value: string) {
    console.log('the selected value is ' + value);
    if (value === 'individual') {
      this.newUserService.getAllIndividualCustomer().subscribe((i) => {
        console.log(i);
        this.allCustomers = i;
        this.businessPartnerID = i;
      });
    } else if (value === 'company') {
      this.newUserService.getAllCompanyCustomer().subscribe((i) => {
        console.log(i);
        this.allCustomers = i;
        this.businessPartnerID = i;
      });
    }
  }
  onCustomerOptionsSelected(value: string) {
    console.log('the selected value is ' + value);
    // console.log(this.allCustomers);
    const result = this.allCustomers.find(
      ({ InternalID }) => InternalID === value
    );
    console.log(result.SalesArrangementSalesArrangement);
    this.salesUnits = result.SalesArrangementSalesArrangement;
  }
  onSalesUnitOptionsSelected(value: string) {
    console.log('the selected value is ' + value);
    // console.log(this.salesUnits);
    const result = this.salesUnits.find(({ ID }) => ID === value);
    console.log(result);
    this.distributionChannels = result;
  }

}
