import { Component, Input, OnInit, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Address } from '../../../data/Customer';
import { AddIndividualAddressComponent } from '../../add-new-modal/add-individual-address/add-individual-address.component';
import countryData from '../../../data/country';
import { IndividualServiceService } from 'src/app/views/app/customer-portal/customer-individual/individual-service.service';

@Component({
  selector: 'app-profile-address',
  templateUrl: './profile-address.component.html'
})
export class ProfileAddressComponent implements OnInit {

  @Input() addressData: Address[];
  @Input() formArrayName:string;
  @Input() formGroupName: string;
  @Input() custObjectID:any;
  @ViewChild('addNewAddressModalRef', { static: true }) addNewAddressModalRef: AddIndividualAddressComponent;
  @ViewChild('detailForm') detailForm: NgForm;

  addressform: FormGroup;
  addressDetailCompanyForm:FormGroup;
  Selected?:Address;

  modalRef: BsModalRef;

  edit:boolean=true;
  countryList=countryData;

  constructor(private fb: FormBuilder,
              private rootFormGroup:FormGroupDirective,
              private modalService: BsModalService,
              private individualService:IndividualServiceService) {
  }
  ngOnChanges(changes: SimpleChanges) {
    this.addressform=this.rootFormGroup.control;
    this.addressDetailCompanyForm=this.addressform.get(this.formGroupName) as FormGroup;
    // only run when property "data" changed
    if (changes['addressData'] && this.addressData) {
      this.addressData.forEach((item: Address) => {
          let resource = this.createtablerow();
          resource.patchValue({
            addressDesc: item.description,
            country: item.country,
            city: item.city,
            addressLine1: item.addressLine1,
            addressLine2: item.addressLine2,
            street: item.street,
            buildingNumber: item.buildingNumber
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
    (<FormArray>this.addressform.get(this.formArrayName))
      .controls
      .forEach(control => {
        control.disable();
      });
  }
  ngOnInit() {

  }
  showAddNewModal(): void {
    this.addNewAddressModalRef.showModal();
  }
  createtablerow(): FormGroup {
    return this.fb.group({
      addressDesc: new FormControl(''),
      country: new FormControl(''),
      city: new FormControl(''),
      addressLine1: new FormControl(''),
      addressLine2: new FormControl(''),
      street: new FormControl(''),
      buildingNumber: new FormControl(''),
      postalCode:new FormControl(),
    });
  }
  createForm(): void {
    this.addressform = this.fb.group({
      //tableRowArray is a FormArray which holds a list of FormGroups
      tableRowArray: this.fb.array([
      ])
    })
  }
  get addressFormArray(): FormArray {
    return this.addressform.get(this.formArrayName) as FormArray;
  }
  addNewRow(): void {
    this.addressFormArray.push(this.createtablerow());
  }
  addAdress(address:Address):void{
    this.addressData = [...this.addressData,address];
    let resource = this.createtablerow();
        resource.patchValue({
          addressDesc:address.description,
          country: address.country,
          city: address.city,
          addressLine1: address.addressLine1,
          addressLine2:address.addressLine2,
          street:address.street,
          buildingNumber: address.buildingNumber,
          postalCode:address.postalCode
         });
    this.addressFormArray.push(resource);
    (<FormArray>this.addressform.get(this.formArrayName)).controls.forEach(control => {
        control.disable();
      });
  }
  onDeleteRow(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }
  confirm(addressDesc,rowIndex: number):void{
    this.addressData = this.addressData.filter((u) => u.description !== addressDesc);
    this.addressFormArray.removeAt(rowIndex);
    this.individualService.deleteAddress(this.addressData[rowIndex].objectID).subscribe();
    this.modalRef.hide();
  }

  decline(): void {
    this.modalRef.hide();
  }
  onSelect(item:Address):void
  {
    this.Selected=item;
  }
  update() {
    (<FormArray>this.addressform.get('tableRowArray')).controls.forEach(control=>{
      control.enable();
    });
  }
  // save address detail
  onSubmit(){
    if (this.detailForm.valid) {
      console.log("Address Detail Updated",this.detailForm.value);
      // this.detailForm.controls['description'].disable();
      // this.detailForm.controls['country'].disable();
      // this.detailForm.controls['city'].disable();
      // this.detailForm.controls['addressLine1'].disable();
      // this.detailForm.controls['addressLine2'].disable();
      // this.detailForm.controls['street'].disable();
      // this.detailForm.controls['buildingNumber'].disable();
      // this.detailForm.controls['postalCode'].disable();
    }
  }
  onCountrySelected(value: string) {
    console.log('country selected value is ' + value);
  }

}
