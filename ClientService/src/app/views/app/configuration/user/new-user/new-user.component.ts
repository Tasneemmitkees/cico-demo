import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewUserService } from './new-user.service';
import currency from '../../../../../data/currency';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
})
export class NewUserComponent implements OnInit {
  userform: FormGroup;
  public edit: boolean = true;
  isCustomerShown: boolean;
  businessPartnerID = [];
  salesUnits = [];
  priceLists = [];
  distributionChannels: any = [];
  allCustomers;
  userID:any;
  currencyList=currency;
  constructor(
    private route: Router,
    private fb: FormBuilder,
    private newUserService: NewUserService
  ) {}

  ngOnInit() {
    this.isCustomerShown = false;
    this.createForm();
    this.setRoleValidators();
    // this.userID = this.route.snapshot.params['id'];
    let user = JSON.parse(localStorage.getItem('user'));

    this.newUserService.getNextId(user.tenantId).subscribe((i) => {
      this.userID=i;
      console.log(this.userID);
      this.userform.patchValue({
        id: i,
      });
    });
  }
  onSubmit() {
    if (this.userform.valid) {
      let body = {
        username: this.userform.value.userName,
        password: this.userform.value.password,
        role: this.userform.value.role,
        status: 'active',
        salesOrgnaisation: this.userform.value.salesUnit,
        distributionChannel: this.userform.value.distributionChannel,
        priceList: this.userform.value.priceList,
        bydesignUser: this.userform.value.businessPartnerID,
        bydesignUserType:this.userform.value.customerType,
        currency:this.userform.value.currency
      };
      // console.log("bodyyyyyyyyy", body);

      let user = JSON.parse(localStorage.getItem('user'));
      this.newUserService.createUser(user.tenantId, body).subscribe((i) => {
        this.route.navigate(['/app/configuration/user/userList']);
      });
      console.log('New User', body);
    }
  }
  createForm() {
    this.userform = this.fb.group({
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
    const salesUnitContol = this.userform.get('salesUnit');
    const distributionChannelContol = this.userform.get('distributionChannel');
    const priceListContol = this.userform.get('priceList');
    const customerTypeContol = this.userform.get('customerType');
    const businessPartnerIDContol = this.userform.get('businessPartnerID');

    this.userform.get('role').valueChanges
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
    let x = [];
    x.push(result)
    this.distributionChannels = x;
  }
}
