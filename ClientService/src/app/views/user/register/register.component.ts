import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { NotificationsService, NotificationType } from 'angular2-notifications';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { NewUserService } from '../../app/configuration/user/new-user/new-user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  buttonDisabled = false;
  buttonState = '';
  public edit: boolean = true;
  isCustomerShown: boolean;
  businessPartnerID = [];
  salesUnits = [];
  priceLists = [];
  distributionChannels: any = {};
  allCustomers;
  tenantId = "T5" //TODO

  constructor(private authService: AuthService,
              private notifications: NotificationsService,
              private router: Router,
              private fb: FormBuilder,
              private newUserService: NewUserService) { }

  ngOnInit() {
    this.isCustomerShown = false;
    this.createForm();
    // let user = JSON.parse(localStorage.getItem('user'));

    this.newUserService.getNextId(this.tenantId).subscribe((i) => {
      console.log(i);
      this.registerForm.patchValue({
        id: i,
      });
    });
  }
  createForm() {
    this.registerForm = this.fb.group({
      id: new FormControl({ value: '', disabled: this.edit }),
      userName: new FormControl(''),
      password: new FormControl(''),
      role: new FormControl(''),
      businessPartnerID: new FormControl(''),
      customerType: new FormControl(''),
    });
  }
  onSubmit(): void {
    if (this.registerForm.valid && !this.buttonDisabled) {
      this.buttonDisabled = true;
      this.buttonState = 'show-spinner';
      let body = {
        username: this.registerForm.value.userName,
        password: this.registerForm.value.password,
        role: this.registerForm.value.role,
        status: 'inActive',
        // salesOrgnaisation: this.registerForm.value.salesUnit,
        // distributionChannel: this.registerForm.value.distributionChannel,
        // priceList: this.registerForm.value.priceList,
        bydesignUser: this.registerForm.value.businessPartnerID,
        bydesignUserType:
          this.registerForm.value.businessPartnerID.customerType,
      };
      let user = JSON.parse(localStorage.getItem('user'));
      this.newUserService.createUser(this.tenantId, body).subscribe((i) => {
        console.log(i);
        this.router.navigate(['/app/configuration/user/userList']);
      });
      console.log('New User', body);
    }
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
}
