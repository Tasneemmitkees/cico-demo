import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Address } from 'src/app/data/Customer';
import { IndividualServiceService } from 'src/app/views/app/customer-portal/customer-individual/individual-service.service';
import countryData from '../../../data/country';

@Component({
  selector: 'app-add-individual-address',
  templateUrl: './add-individual-address.component.html'
})
export class AddIndividualAddressComponent implements OnInit{
  modalRef: BsModalRef;
  config = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-right'
  };
  addressForm:FormGroup;


  @ViewChild('template', { static: true }) template: TemplateRef<any>;
  @Input() custObjectID:any;
  @Input() addressData: Address[]=[];
  @Output() newAddress = new EventEmitter<Address>();
  countryList=countryData;

  constructor(private modalService: BsModalService,
              private fb:FormBuilder,
              private individualAccService:IndividualServiceService) { }

  ngOnInit() {
    this.createAddressForm();
  }

  showModal(): void {
    this.modalRef = this.modalService.show(this.template, this.config);
  }
  createAddressForm(){
    this.addressForm= this.fb.group({
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
  onSubmit(){
    if(this.addressForm.valid)
    {
      const newAddress:Address ={
        objectID: this.custObjectID,
        website: this.addressForm.value.description,
        country: this.addressForm.value.country,
        street: this.addressForm.value.street,
        addressLine1: this.addressForm.value.addressLine1,
        addressLine2: this.addressForm.value.addressLine2,
        buildingNumber: this.addressForm.value.buildingNumber,
        city: this.addressForm.value.city,
        postalCode: this.addressForm.value.postalCode,
      }
      console.log("new Address",this.addressForm.value);

      this.individualAccService.addAddress(newAddress).subscribe((i:any)=>{
        let newAddress2:Address ={
          objectID: i.ObjectID,
          description: this.addressForm.value.buildingNumber+" "+this.addressForm.value.street+","+this.addressForm.value.postalCode+" "+this.addressForm.value.city+","+this.addressForm.value.country,
          country: this.addressForm.value.country,
          street: this.addressForm.value.street,
          addressLine1: this.addressForm.value.addressLine1,
          addressLine2: this.addressForm.value.addressLine2,
          buildingNumber: this.addressForm.value.buildingNumber,
          city: this.addressForm.value.city,
          postalCode: this.addressForm.value.postalCode,
        }
        this.newAddress.emit(newAddress2);
      })
      this.modalRef.hide();
    }
  }
  onCountrySelected(value: string) {
    console.log('country selected value is ' + value);
  }

}
