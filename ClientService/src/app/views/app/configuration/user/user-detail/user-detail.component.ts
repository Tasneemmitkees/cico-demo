import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NewUserService } from '../new-user/new-user.service';
import currency from '../../../../../data/currency';
import { UserDetailService } from './user-detail.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
})
export class UserDetailComponent implements OnInit {
  public userID: number;
  public edit: boolean = true;
  userDetailForm: FormGroup;
  businessPartnerID = [];
  salesUnits = [];
  priceLists = [];
  distributionChannels: any = {};
  isCustomerShown: boolean;
  allCustomers;
  currencyList=currency;
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private userDetailService: UserDetailService,
    private newUserService: NewUserService
  ) { }

  ngOnInit() {
    this.createForm();
    this.userID = this.route.snapshot.params['id'];
    let user = JSON.parse(localStorage.getItem('user'));

    this.userDetailService
      .getOneUser(user.tenantId, this.userID.toString())
      .subscribe((i) => {
        console.log("user detail",i);
        this.userDetailForm.patchValue({
          id: i._id,
          name: i.username,
          password: i.password,
          salesUnit: i.salesOrgnaisation,
          distributionChannel: i.distributionChannel,
          priceList: i.priceList,
          role: i.role,
          status: i.status,
          businessPartnerID: i.bydesignUser,
          customerType: i.bydesignUserType,
          currency: i.currency
        });
        if (i.role === 'customer') {
          this.isCustomerShown = true;
          this.newUserService.getAllPricelists().subscribe((i) => {
            this.priceLists = i;
          });
        } else {
          this.isCustomerShown = false;
        }
      });
      // if (this.userDetailForm.enabled && this.userDetailForm.get('id').disabled) {
      //   this.setValidator();
      // }
  }
  // ngOnChanges(changes: SimpleChanges) {
  //   // only run when property "data" changed
  //   if (changes['userDetailForm'] && this.userDetailForm.enabled) {
  //     this.setValidator();
  //   }
  // }
  createForm() {
    this.userDetailForm = this.fb.group({
      id: new FormControl(''),
      name: new FormControl(''),
      password: new FormControl(''),
      salesUnit: new FormControl(''),
      distributionChannel: new FormControl(''),
      priceList: new FormControl(''),
      role: new FormControl(''),
      status: new FormControl(''),
      businessPartnerID: new FormControl(''),
      customerType: new FormControl(''),
      currency: new FormControl(''),
    });
    this.userDetailForm.disable();
  }
  onSubmit() {
    console.log(this.userID);
    if (this.userDetailForm.valid) {
      console.log('After updating user detail', this.userDetailForm.value);
      let body = {
        username: this.userDetailForm.value.name,
        password: this.userDetailForm.value.password,
        role: this.userDetailForm.value.role,
        status: 'active',
        salesOrgnaisation: this.userDetailForm.value.salesUnit,
        distributionChannel: this.userDetailForm.value.distributionChannel,
        priceList: this.userDetailForm.value.priceList,
        bydesignUser: this.userDetailForm.value.businessPartnerID,
        bydesignUserType: this.userDetailForm.value.bydesignUserType,
        currency: this.userDetailForm.value.currency,
      };

      let user = JSON.parse(localStorage.getItem('user'));
      this.userDetailService.updateUser(user.tenantId, this.userID, body).subscribe((i) => {
        console.log(i);
        // this.route.navigate(['/app/configuration/user/userList']);
      });
      this.userDetailForm.disable();
    }
  }
  update() {
    this.userDetailForm.controls.id.disable();
    this.userDetailForm.controls.name.enable();
    this.userDetailForm.controls.password.enable();
    this.userDetailForm.controls.salesUnit.enable();
    this.userDetailForm.controls.distributionChannel.enable();
    this.userDetailForm.controls.priceList.enable();
    this.userDetailForm.controls.role.enable();
    this.userDetailForm.controls.status.enable();
    this.userDetailForm.controls.businessPartnerID.enable();
    this.userDetailForm.controls.customerType.enable();
    this.userDetailForm.controls.currency.enable();
    this.setValidator();
  }

  setValidator() {
    const salesUnitContol = this.userDetailForm.get('salesUnit');
    const distributionChannelContol = this.userDetailForm.get('distributionChannel');
    const priceListContol = this.userDetailForm.get('priceList');
    const customerTypeContol = this.userDetailForm.get('customerType');
    const businessPartnerIDContol = this.userDetailForm.get('businessPartnerID');

    if (this.userDetailForm.enabled && this.userDetailForm.get('id').disabled) {
      this.userDetailForm.get('name').setValidators(Validators.required);
      this.userDetailForm.get('password').setValidators(Validators.required);
      this.userDetailForm.get('role').setValidators(Validators.required);
      this.userDetailForm.get('currency').setValidators(Validators.required);
      this.userDetailForm.get('status').setValidators(Validators.required);

      this.userDetailForm.get('role').valueChanges.subscribe(role => {
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
    else {
      this.userDetailForm.controls.name.clearValidators();
      this.userDetailForm.controls.password.clearValidators();
      this.userDetailForm.controls.salesUnit.clearValidators();
      this.userDetailForm.controls.distributionChannel.clearValidators();
      this.userDetailForm.controls.priceList.clearValidators();
      this.userDetailForm.controls.status.clearValidators();
      this.userDetailForm.controls.businessPartnerID.clearValidators();
      this.userDetailForm.controls.role.clearValidators();
      this.userDetailForm.controls.customerType.clearValidators();
      this.userDetailForm.controls.currency.clearValidators();
    }
    this.userDetailForm.controls.name.updateValueAndValidity();
    this.userDetailForm.controls.password.updateValueAndValidity();
    this.userDetailForm.controls.status.updateValueAndValidity();
    this.userDetailForm.controls.role.updateValueAndValidity();
    this.userDetailForm.controls.currency.updateValueAndValidity();

  }
  onRoleOptionsSelected(value: string) {
    console.log('the selected value is ' + value);
    if (value === 'customer') {
      this.isCustomerShown = true;
      this.newUserService.getAllPricelists().subscribe((i) => {
        this.priceLists = i;
      });
    } else {
      this.isCustomerShown = false;
    }
  }
  onCustomerOptionsSelected(value: string) {
    console.log('the selected value is ' + value);
    const result = this.allCustomers.find(
      ({ InternalID }) => InternalID === value);
    console.log("salesUnit",result.SalesArrangementSalesArrangement);
    this.salesUnits = result.SalesArrangementSalesArrangement;
  }
  onSalesUnitOptionsSelected(value: string) {
    console.log('the selected value is ' + value);
    const result = this.salesUnits.find(({ ID }) => ID === value);
    console.log("distributionChannels",result);
    this.distributionChannels = result;
  }
  // setRoleValidators() {

      // this.userDetailForm.get('salesUnit').setValidators(Validators.required);
      // this.userDetailForm.get('distributionChannel').setValidators(Validators.required);
      // this.userDetailForm.get('priceList').setValidators(Validators.required);
      // this.userDetailForm.get('status').setValidators(Validators.required);
      // this.userDetailForm.get('businessPartnerID').setValidators(Validators.required);
      // this.userDetailForm.get('role').setValidators(Validators.required);
      // this.userDetailForm.get('customerType').setValidators(Validators.required);
  //   const salesUnitContol = this.userDetailForm.get('salesUnit');
  //   const distributionChannelContol = this.userDetailForm.get('distributionChannel');
  //   const priceListContol = this.userDetailForm.get('priceList');
  //   const customerTypeContol = this.userDetailForm.get('customerType');
  //   const businessPartnerIDContol = this.userDetailForm.get('businessPartnerID');

  //   this.userDetailForm.get('role').valueChanges.subscribe(role => {
  //     if (role === 'customer') {
  //         salesUnitContol.setValidators([Validators.required]);
  //         distributionChannelContol.setValidators([Validators.required]);
  //         priceListContol.setValidators([Validators.required]);
  //         customerTypeContol.setValidators([Validators.required]);
  //         businessPartnerIDContol.setValidators([Validators.required]);
  //       }

  //       if (role === 'supplier') {
  //         salesUnitContol.setValidators(null);
  //         distributionChannelContol.setValidators(null);
  //         priceListContol.setValidators(null);
  //         customerTypeContol.setValidators(null);
  //         businessPartnerIDContol.setValidators(null);
  //       }

  //       salesUnitContol.updateValueAndValidity();
  //       distributionChannelContol.updateValueAndValidity();
  //       priceListContol.updateValueAndValidity();
  //       customerTypeContol.updateValueAndValidity();
  //       businessPartnerIDContol.updateValueAndValidity();
  //   });
  // }
  onTypeOptionsSelected(value: string) {
    console.log('the selected value is ' + value);
    if (value === 'individual') {
      this.newUserService.getAllIndividualCustomer().subscribe((i) => {
        console.log("individual",i);
        this.allCustomers = i;
        this.businessPartnerID = i;
      });
    } else if (value === 'company') {
      this.newUserService.getAllCompanyCustomer().subscribe((i) => {
        console.log("company",i);
        this.allCustomers = i;
        this.businessPartnerID = i;
      });
    }
  }
}
