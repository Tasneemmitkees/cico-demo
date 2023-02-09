import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{CompanyServiceService} from "./company-service.service"
import {CompanyCustomer} from '../../../../data/company-customer';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-company',
  templateUrl: './customer-company.component.html'
})
export class CustomerCompanyComponent implements OnInit {

  companyForm:FormGroup;
  public edit: boolean = true;
  customer:CompanyCustomer;
  generalData: any;
  addressData:any;
  contactData:any;
  bankData:any;
  attachementData:any;
  custObjectID:any;
  constructor(
    private route: ActivatedRoute,
    private comapanyAccService:CompanyServiceService,
    private fb: FormBuilder) { }


  ngOnInit() {
    this.createCompanyForm();
    this.get();
  }
  get():void{
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    let user = JSON.parse(localStorage.getItem('user'));

    this.comapanyAccService.getCompanyCustomer(user.bydesignUser)
    .subscribe(i => {
      this.customer = i;
      this.custObjectID=this.customer.objectID
      console.log("company customer",this.customer);
      this.generalData = i
      this.addressData=i.address
      this.bankData=i.bankData
      this.attachementData=i.attachement
      this.contactData=i.contactInformation
    });
  }
  createCompanyForm() {
    this.companyForm=this.fb.group({
      generalCompanyForm:this.fb.group({
        accountID: new FormControl({ value: '', disabled: this.edit }),
        arabicName: new FormControl({ value: '', disabled: this.edit }),
        englishName: new FormControl({ value: '', disabled: this.edit }),
        industry:new FormControl({ value: '', disabled: this.edit }),
        status:new FormControl({ value: '', disabled: this.edit }),
      }),
      identificationNumbersFormArray: this.fb.array([]),
      addressCompanyFormArray:this.fb.array([]),
      contactCompanyFormArray:this.fb.array([]),
      bankCompanyFormArray: this.fb.array([]),
      attachmentCompanyFormArray:this.fb.array([]),

      addressDetailCompanyForm:this.fb.group({
        description: new FormControl({ value: '', disabled: this.edit }),
        countryCode: new FormControl({ value: '', disabled: this.edit }),
        city: new FormControl({ value: '', disabled: this.edit }),
        addressLine1:new FormControl({ value: '', disabled: this.edit }),
        addressLine2:new FormControl({ value: '', disabled: this.edit }),
        street:new FormControl({ value: '', disabled: this.edit }),
        buildingNumber:new FormControl({ value: '', disabled: this.edit }),
        postalCode:new FormControl({ value: '', disabled: this.edit }),
      }),

    });

  }
  onSubmit(){
    if (this.companyForm.valid) {
      console.log("Company Form Submitted!",this.companyForm.getRawValue());
    //  console.log('j',(<FormArray>this.companyForm.get('bankCompanyFormArray')).controls.forEach(control=>{
    //     control.value;
    //   }));
    console.log("address updated",this.customer)
      this.customer.arabicName=this.companyForm.getRawValue().generalCompanyForm.arabicName
      this.customer.englishName=this.companyForm.getRawValue().generalCompanyForm.englishName
      this.customer.industryCode=this.companyForm.getRawValue().generalCompanyForm.industryCode
      for (let i = 0; i < this.companyForm.getRawValue().identificationNumbersFormArray.length ; i++) {
        this.customer.identificationNumbers[i].country=this.companyForm.getRawValue().identificationNumbersFormArray[i].country
        this.customer.identificationNumbers[i].numberType=this.companyForm.getRawValue().identificationNumbersFormArray[i].numbertype
        this.customer.identificationNumbers[i].numberID=this.companyForm.getRawValue().identificationNumbersFormArray[i].numberID
      }
      this.comapanyAccService.updateCompanyaccount(this.customer).subscribe()
    }
    this.companyForm.get('generalCompanyForm.arabicName').disable();
    this.companyForm.get('generalCompanyForm.englishName').disable();
    this.companyForm.get('generalCompanyForm.industry').disable();
    //this.companyForm.get('generalCompanyForm.status').disable();
    (<FormArray>this.companyForm.get('identificationNumbersFormArray')).controls.forEach(control=>{
      control.disable();
    });
    (<FormArray>this.companyForm.get('contactCompanyFormArray')).controls.forEach(control=>{
      control.disable();
    });
    (<FormArray>this.companyForm.get('bankCompanyFormArray')).controls.forEach(control=>{
      control.value;
    });
    (<FormArray>this.companyForm.get('attachmentCompanyFormArray')).controls.forEach(control=>{
      control.disable();
    });
    this.companyForm.get('addressDetailCompanyForm.description').disable();
    this.companyForm.get('addressDetailCompanyForm.countryCode').disable();
    this.companyForm.get('addressDetailCompanyForm.city').disable();
    this.companyForm.get('addressDetailCompanyForm.addressLine1').disable();
    this.companyForm.get('addressDetailCompanyForm.addressLine2').disable();
    this.companyForm.get('addressDetailCompanyForm.street').disable();
    this.companyForm.get('addressDetailCompanyForm.buildingNumber').disable();
    this.companyForm.get('addressDetailCompanyForm.postalCode').disable();
  }
  update() {
    this.companyForm.get('generalCompanyForm.arabicName').enable();
    this.companyForm.get('generalCompanyForm.englishName').enable();
    this.companyForm.get('generalCompanyForm.industry').enable();
    (<FormArray>this.companyForm.get('identificationNumbersFormArray')).controls.forEach(control=>{
      control.enable();
    });
    // (<FormArray>this.companyForm.get('contactCompanyFormArray')).controls.forEach(control=>{
    //   control.enable();
    // });
    (<FormArray>this.companyForm.get('bankCompanyFormArray')).controls.forEach(control=>{
      control.enable();
    });
    (<FormArray>this.companyForm.get('attachmentCompanyFormArray')).controls.forEach(control=>{
      control.enable();
    });
    this.companyForm.get('addressDetailCompanyForm.description').enable();
    this.companyForm.get('addressDetailCompanyForm.countryCode').enable();
    this.companyForm.get('addressDetailCompanyForm.city').enable();
    this.companyForm.get('addressDetailCompanyForm.addressLine1').enable();
    this.companyForm.get('addressDetailCompanyForm.addressLine2').enable();
    this.companyForm.get('addressDetailCompanyForm.street').enable();
    this.companyForm.get('addressDetailCompanyForm.buildingNumber').enable();
    this.companyForm.get('addressDetailCompanyForm.postalCode').enable();

  }


}
