import { Component, Input, OnInit,  ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,FormGroupDirective, NgForm } from '@angular/forms';
import countryData,{Country} from '../../../data/country';
import { Address } from '../../../data/Customer';

@Component({
  selector: 'app-company-address-detail',
  templateUrl: './company-address-detail.component.html',
})
export class CompanyAddressDetailComponent implements OnInit {

  @Input() address:Address;
  addressForm:FormGroup;
  addressDetailCompanyForm:FormGroup;
  @Input() formGroupName: string;
  form:FormGroup;
  @ViewChild('detailForm') detailForm: NgForm;
  countryList=countryData;

  constructor(private fb:FormBuilder,
    private rootFormGroup:FormGroupDirective,) { }

  ngOnInit() {
  }
  onSubmit(){
    if (this.detailForm.valid) {
      console.log("Address Detail Updated",this.detailForm.value);
      this.detailForm.controls['description'].disable();
      this.detailForm.controls['countryCode'].disable();
      this.detailForm.controls['city'].disable();
      this.detailForm.controls['addressLine1'].disable();
      this.detailForm.controls['addressLine2'].disable();
      this.detailForm.controls['street'].disable();
      this.detailForm.controls['buildingNumber'].disable();
      this.detailForm.controls['postalCode'].disable();
    }
  }
  onCountrySelected(value: string) {
    console.log('country selected value is ' + value);
  }
  // createCompanyForm() {
  //   this.form=this.fb.group({
  //       description: new FormControl(),
  //       countryCode: new FormControl({ value: '',}),
  //       city: new FormControl({ value: '',  }),
  //       addressLine1:new FormControl({ value: '',  }),
  //       addressLine2:new FormControl({ value: '',  }),
  //       street:new FormControl({ value: '',  }),
  //       buildingNumber:new FormControl({ value: '',  }),
  //       postalCode:new FormControl({ value: '',  }),
  //     })
  // }

}
