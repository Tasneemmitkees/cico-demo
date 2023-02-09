import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
 import { IdentificationNumbers } from '../../../data/SupplierPortal';
import countryData from '../../../data/country';
import identification from '../../../data/numberType';

@Component({
  selector: 'app-add-identification',
  templateUrl: './add-identification.component.html',
})
export class AddIdentificationComponent implements OnInit{

  modalRef: BsModalRef;
  config = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-right'
  };
  @ViewChild('template', { static: true }) template: TemplateRef<any>;
  @Output() newIdentification = new EventEmitter<IdentificationNumbers>();

  form:FormGroup;
  newTaxNumber:IdentificationNumbers;
  countryList=countryData;
  numberList=identification;
  numberTypeCodeList=[];
  constructor(
    private modalService: BsModalService, private fb:FormBuilder){ }
  ngOnInit() {
    this.createForm();
  }


  showModal(): void {
    this.modalRef = this.modalService.show(this.template, this.config);
  }
  createForm() {
    this.form= this.fb.group({
      country: new FormControl(''),
      numberType: new FormControl(''),
      numberID: new FormControl(''),
    });
  }
  onSubmit(){
    if(this.form.valid)
    {
      this.newTaxNumber={
        numberType:this.form.value.numberType,
        numberID:this.form.value.numberID,
        country:this.form.value.country
      }
      this.newIdentification.emit(this.newTaxNumber);
      this.modalRef.hide();
    }
    console.log("add done",this.form.value);
  }
  onCountrySelected(value: string) {
    console.log('country selected value is ' + value);

    const result = this.numberList.find(x => x.Context.Parameter.Value === value );
    console.log("code of country",result);
    if(result==null){
      this.numberTypeCodeList=[];
    }else{
    let x=[];
    x.push(result.Code);
    console.log("array of code",x);
    this.numberTypeCodeList=x;
    }

  }
  onNumberTypeSelected(value: string) {
    console.log('the Number Type value is ' + value);
  }

}
