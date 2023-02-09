import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Address } from '../../../data/SupplierPortal';
import countryData from '../../../data/country';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html'
})
export class AddAddressComponent implements OnInit{
  modalRef: BsModalRef;
  config = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-right'
  };
  addressForm:FormGroup;


  @ViewChild('template', { static: true }) template: TemplateRef<any>;
  @Output() newAddress = new EventEmitter<Address>();
  countryList=countryData;

  constructor(private modalService: BsModalService,
              private fb:FormBuilder,) { }

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
      // addressLine1:new FormControl(''),
      // addressLine2:new FormControl(''),
      // street:new FormControl(''),
      // buildingNumber:new FormControl(),
      // postalCode:new FormControl(),
    });
  }
  onSubmit(){
    if(this.addressForm.valid)
    {
      const newAddress:Address ={
        country: this.addressForm.value.country,
        city: this.addressForm.value.city,
        description: this.addressForm.value.description,
      }
      console.log("new Address",this.addressForm.value);
      this.newAddress.emit(newAddress);
      this.modalRef.hide();
    }
  }
  onCountrySelected(value: string) {
    console.log('country selected value is ' + value);
  }

}
