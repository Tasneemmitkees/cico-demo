import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input, OnInit, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormControlName, FormGroup, FormGroupDirective } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CompanyServiceService } from 'src/app/views/app/customer-portal/customer-company/company-service.service';
import  {Address} from '../../../data/Customer';
import { AddNewAddressComponent } from '../../add-new-modal/add-new-address/add-new-address.component';
import countryData,{Country} from '../../../data/country';

@Component({
  selector: 'app-company-address',
  templateUrl: './company-address.component.html',
  styleUrls: ['./company-address.component.css']
})
export class CompanyAddressComponent  {

  addressCompanyForm:FormGroup;
  addressDetailCompanyForm:FormGroup;
  @ViewChild('addNewAddressModalRef', { static: true })
  addNewAddressModalRef: AddNewAddressComponent;
  // addressFormArray:FormArray;
  @Input() addressData: Address[];
  @Input() formArrayName:string;
  @Input() formGroupName: string;
  @Input() custObjectID:any;
  //@Input() customerType:any;

  selection = new SelectionModel<Address>(false,[]);
  Selected?:Address;
  //'addressLine1','addressLine2','street','buildingNumber',
  // displayedColumns: string[] = ['description','country', 'city', 'delete'];
  // data=companydata;
  public edit: boolean = true;


  modalRef: BsModalRef;
  message: string;
  countryList=countryData;

  constructor(private fb:FormBuilder,
              private rootFormGroup:FormGroupDirective,
              private companyAccService: CompanyServiceService,
              private modalService: BsModalService) { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    this.addressCompanyForm=this.rootFormGroup.control;
    this.addressDetailCompanyForm=this.addressCompanyForm.get(this.formGroupName) as FormGroup;
    // this.createAddressDetailForm();
    // only run when property "data" changed
    if (changes['addressData'] && this.addressData) {
      this.addressData.forEach((item:Address)=>{
        let resource = this.createtablerow();
        resource.patchValue({
          description:item.description,
          country: item.country,
          city: item.city,
          addressLine1: item.addressLine1,
          addressLine2:item.addressLine2,
          street:item.street,
          buildingNumber: item.buildingNumber,
          postalCode:item.postalCode
         });
        this.addressFormArray.push(resource);

        this.addressDetailCompanyForm.patchValue({
          description:item.description,
          country: item.country,
          city: item.city,
          addressLine1: item.addressLine1,
          addressLine2:item.addressLine2,
          street:item.street,
          buildingNumber: item.buildingNumber,
          postalCode:item.postalCode
        });
      });

    }
    (<FormArray>this.addressCompanyForm.get(this.formArrayName)).controls.forEach(control=>{
      control.disable();
    });

    console.log("first com",this.addressData)
  }
  showAddNewModal(): void {
    this.addNewAddressModalRef.showModal();
  }

  onSubmit(){
    if (this.addressDetailCompanyForm.valid) {
      console.log("Address Detail Updated",this.addressDetailCompanyForm.getRawValue());

    }
  }
  createAddressDetailForm(): void {
    this.addressDetailCompanyForm = this.fb.group({
      description: new FormControl({ value: '', disabled: this.edit }),
      countryCode: new FormControl({ value: '', disabled: this.edit }),
      city: new FormControl({ value: '', disabled: this.edit }),
      addressLine1:new FormControl({ value: '', disabled: this.edit }),
      addressLine2:new FormControl({ value: '', disabled: this.edit }),
      street:new FormControl({ value: '', disabled: this.edit }),
      buildingNumber:new FormControl({ value: '', disabled: this.edit }),
      postalCode:new FormControl({ value: '', disabled: this.edit }),
    });
  }

  createtablerow():FormGroup{
    return this.fb.group({
      description: new FormControl(''),
      country:new FormControl(''),
      city: new FormControl(''),
      addressLine1:new FormControl(''),
      addressLine2:new FormControl(''),
      street:new FormControl(''),
      buildingNumber:new FormControl(),
      postalCode:new FormControl(),
    });
  }

  get addressFormArray(): FormArray {
    return this.addressCompanyForm.get(this.formArrayName) as FormArray;
  }
//   get buildingNumber() {
//     return this.addressFormArray.get('buildingNumber') as FormControl;
// }

  addNewRow(): void {
    const newAddress:Address = {
      description: '',
      country: '',
      city: '',
      addressLine1: '',
      addressLine2: '',
      street: '',
      buildingNumber: null,
      postalCode: null,
      website: null,
      objectID: undefined,
      postalObjectID: undefined
    };
    this.addressData = [...this.addressData,newAddress];
    this.addressFormArray.push(this.createtablerow());
  }
  addAdress(address:Address){
    this.addressData = [...this.addressData,address];
    let resource = this.createtablerow();
        resource.patchValue({
          description:address.description,
          country: address.country,
          city: address.city,
          addressLine1: address.addressLine1,
          addressLine2:address.addressLine2,
          street:address.street,
          buildingNumber: address.buildingNumber,
          postalCode:address.postalCode
         });
    this.addressFormArray.push(resource);
    (<FormArray>this.addressCompanyForm.get(this.formArrayName)).controls.forEach(control=>{
      control.disable();
    });
  }
  // onDeleteRow(description,rowIndex:number): void {
  //   this.addressData = this.addressData.filter((u) => u.description !== description);
  //   this.addressFormArray.removeAt(rowIndex);
  // }
  onDeleteRow(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }
  confirm(description,rowIndex: number):void{
    this.message = 'Confirmed!';
    let id=this.addressData[rowIndex].objectID
    this.addressFormArray.removeAt(rowIndex);
    this.companyAccService.deleteAddress(id).subscribe()
    this.addressData = this.addressData.filter((u) => u.description !== description);
    this.modalRef.hide();

  }

  decline(): void {
    this.message = 'Declined!';
    this.modalRef.hide();
  }
  selectRow(row){
    this.selection.toggle(row);
  }
  onSelect(item:Address):void
  {
    this.Selected=item;
  }
  onCountrySelected(value: string) {
    console.log('country selected value is ' + value);
  }


}
