import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { IdentificationNumbers } from 'src/app/data/Customer';
import { IndividualServiceService } from 'src/app/views/app/customer-portal/customer-individual/individual-service.service';
import countryData from '../../../data/country';
import identification from '../../../data/numberType';
@Component({
  selector: 'app-add-individual-identification',
  templateUrl: './add-individual-identification.component.html',
})
export class AddIndividualIdentificationComponent implements OnInit{

  modalRef: BsModalRef;
  newTaxNumber:IdentificationNumbers;
  @Input() custObjectID:any;
  config = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-right'
  };
  @ViewChild('template', { static: true }) template: TemplateRef<any>;
  @Output() newIdentification = new EventEmitter<IdentificationNumbers>();

  form:FormGroup;

  newIdentity:IdentificationNumbers;
  countryList=countryData;
  numberList=identification;
  numberTypeCodeList=[];
  constructor(private modalService: BsModalService,
              private individualAccService:IndividualServiceService,
              private fb:FormBuilder) { }
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
        objectID:this.custObjectID,
        numberType:this.form.value.numberType,
        numberID:this.form.value.numberID,
        country:this.form.value.country
      }
      console.log(" tax number",this.newTaxNumber);
      this.individualAccService.addTaxNumber(this.newTaxNumber).subscribe((i:any)=>{
        console.log("new tax number",i);
        let taxNum:IdentificationNumbers={
          objectID: i.ObjectID,
          country: i.CountryCodeText,
          numberType: i.TaxNumberTypeCodeText,
          numberID: i.TaxNumberID
        }
        this.newIdentification.emit(taxNum);
      });
      this.modalRef.hide();
    }
  }
  onCountrySelected(value: string) {
    console.log('country selected value is ' + value);

    const result = this.numberList.find(x => x.Context.Parameter.Value === value );
    console.log("code of country",result);
    if(result==null){
      this.numberTypeCodeList=[];
    }else{
    let x = [];
    x.push(result.Code);
    console.log("array of code",x);
    this.numberTypeCodeList=x;
    }

  }
  onNumberTypeSelected(value: string) {
    console.log('the Number Type value is ' + value);
  }

}
