import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Address } from 'src/app/data/Customer';
import { IndividualCustomer } from 'src/app/data/individual-customer';
import { IndividualServiceService } from './individual-service.service';


@Component({
  selector: 'app-customer-individual',
  templateUrl: './customer-individual.component.html'
})
export class CustomerIndividualComponent implements OnInit {

  generalData: any;
  addressData:Address[];
  contactData:any;
  custObjectID:any;

  individualForm:FormGroup;
  public edit: boolean = true;



  constructor(private route: ActivatedRoute,
              private individual:IndividualServiceService,
              private fb: FormBuilder) { }

  customer:IndividualCustomer;
  ngOnInit() {
    this.createIndividualForm();
    this.get();
  }
  get():void{
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    let user = JSON.parse(localStorage.getItem('user'));

    this.individual.getindividualcustomer(user.bydesignUser)
    .subscribe(i => {
      this.customer = i;
      this.generalData = i;
      this.addressData=i.address;
      this.contactData=i.contact;
      this.custObjectID=i.objectID;
      // console.log(this.customer);
    });
  }
  createIndividualForm() {
    this.individualForm=this.fb.group({
      generalIndividualFormGroup:this.fb.group({
        customerid: new FormControl({ value: '', disabled: this.edit }),
        title: new FormControl({ value: '', disabled: this.edit }),
        firstname: new FormControl({ value: '', disabled: this.edit }),
        lastname: new FormControl({ value: '', disabled: this.edit }),
        gender: new FormControl({ value: '', disabled: this.edit }),
        dateofbirth: new FormControl({ value: '', disabled: this.edit }),
        status: new FormControl({ value: '', disabled: this.edit }),
        age: new FormControl({ value: '', disabled: this.edit }),
        nationality: new FormControl({ value: '', disabled: this.edit }),
      }),
      identificationNumbersFormArray: this.fb.array([]),
      addressIndividualFormArray:this.fb.array([]),
      contactIndividualFormArray:this.fb.array([]),
      bankIndividualFormArray: this.fb.array([]),
      attachmentIndividualFormArray:this.fb.array([]),

      addressDetailCompanyForm:this.fb.group({
        description: new FormControl({ value: '', disabled: this.edit }),
        country: new FormControl({ value: '', disabled: this.edit }),
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
    if (this.individualForm.valid) {
      console.log("Individual Form Submitted!",this.individualForm.getRawValue());
      this.customer.firstName=this.individualForm.getRawValue().generalIndividualFormGroup.firstname
      this.customer.lastName=this.individualForm.getRawValue().generalIndividualFormGroup.lastname
      this.customer.title=this.individualForm.getRawValue().generalIndividualFormGroup.title
      this.customer.gender=this.individualForm.getRawValue().generalIndividualFormGroup.gender
      //console.log(this.customer)
      for(let i=0;i<this.individualForm.getRawValue().identificationNumbersFormArray.length;i++)
      {
        // console.log(i)
        // console.log(this.individualForm.getRawValue().identificationNumbersFormArray[i].numberID)
        console.log("here",this.customer)
        //this.customer.identificationnumbers[i].numberID=this.individualForm.getRawValue().identificationNumbersFormArray[i].numberID

        //this.customer.identificationnumbers[i].country=this.individualForm.getRawValue().identificationNumbersFormArray[i].country
        //this.customer.identificationnumbers[i].numberType=this.individualForm.getRawValue().identificationNumbersFormArray[i].numberType
      }
      this.individual.updateIndividualAccount(this.customer).subscribe()
    }
    this.individualForm.get('generalIndividualFormGroup.title').disable();
    this.individualForm.get('generalIndividualFormGroup.firstname').disable();
    this.individualForm.get('generalIndividualFormGroup.lastname').disable();
    this.individualForm.get('generalIndividualFormGroup.gender').disable();
    this.individualForm.get('generalIndividualFormGroup.dateofbirth').disable();
    this.individualForm.get('generalIndividualFormGroup.status').disable();
    this.individualForm.get('generalIndividualFormGroup.nationality').disable();

    (<FormArray>this.individualForm.get('identificationNumbersFormArray')).controls.forEach(control=>{
      control.disable();
    });
    (<FormArray>this.individualForm.get('addressIndividualFormArray')).controls.forEach(control=>{
      control.disable();
    });
    (<FormArray>this.individualForm.get('contactIndividualFormArray')).controls.forEach(control=>{
      control.disable();
    });
    (<FormArray>this.individualForm.get('bankIndividualFormArray')).controls.forEach(control=>{
      control.disable();
    });
    (<FormArray>this.individualForm.get('attachmentIndividualFormArray')).controls.forEach(control=>{
      control.disable();
    });
    this.individualForm.get('addressDetailCompanyForm.description').disable();
    this.individualForm.get('addressDetailCompanyForm.country').disable();
    this.individualForm.get('addressDetailCompanyForm.city').disable();
    this.individualForm.get('addressDetailCompanyForm.addressLine1').disable();
    this.individualForm.get('addressDetailCompanyForm.addressLine2').disable();
    this.individualForm.get('addressDetailCompanyForm.street').disable();
    this.individualForm.get('addressDetailCompanyForm.buildingNumber').disable();
    this.individualForm.get('addressDetailCompanyForm.postalCode').disable();
  }
  update(){
    this.individualForm.get('generalIndividualFormGroup.title').enable();
    this.individualForm.get('generalIndividualFormGroup.firstname').enable();
    this.individualForm.get('generalIndividualFormGroup.lastname').enable();
    this.individualForm.get('generalIndividualFormGroup.gender').enable();
    this.individualForm.get('generalIndividualFormGroup.dateofbirth').enable();
    this.individualForm.get('generalIndividualFormGroup.status').enable();
    this.individualForm.get('generalIndividualFormGroup.nationality').enable();

    (<FormArray>this.individualForm.get('identificationNumbersFormArray')).controls.forEach(control=>{
      control.enable();
    });
    // (<FormArray>this.individualForm.get('addressIndividualFormArray')).controls.forEach(control=>{
    //   control.enable();
    // });
    (<FormArray>this.individualForm.get('contactIndividualFormArray')).controls.forEach(control=>{
      control.enable();
    });
    (<FormArray>this.individualForm.get('bankIndividualFormArray')).controls.forEach(control=>{
      control.enable();
    });
    (<FormArray>this.individualForm.get('attachmentIndividualFormArray')).controls.forEach(control=>{
      control.enable();
    });
    this.individualForm.get('addressDetailCompanyForm.description').enable();
    this.individualForm.get('addressDetailCompanyForm.country').enable();
    this.individualForm.get('addressDetailCompanyForm.city').enable();
    this.individualForm.get('addressDetailCompanyForm.addressLine1').enable();
    this.individualForm.get('addressDetailCompanyForm.addressLine2').enable();
    this.individualForm.get('addressDetailCompanyForm.street').enable();
    this.individualForm.get('addressDetailCompanyForm.buildingNumber').enable();
    this.individualForm.get('addressDetailCompanyForm.postalCode').enable();
  }


}
