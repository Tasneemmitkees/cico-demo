import { Component, Input, OnInit, Renderer2, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CompanyCustomer } from '../../../data/company-customer';
import {IdentificationNumbers} from '../../../data/Customer';
import { CompanyServiceService } from '../../../views/app/customer-portal/customer-company/company-service.service';
import { AddNewAddressComponent } from '../../add-new-modal/add-new-address/add-new-address.component';
import {AddNewIdentificationComponent} from '../../add-new-modal/add-new-identification/add-new-identification.component';

@Component({
  selector: 'app-company-general',
  templateUrl: './company-general.component.html'
})
export class CompanyGeneralComponent implements OnInit {

  @Input() generalData: CompanyCustomer;
  @Input() formGroupName: string;
  @Input() formArrayName:string;
  public edit: boolean = true;
  generalCompanyForm: FormGroup;
  form: FormGroup;
  // identificationNumbersFormArray:FormArray;
  general: CompanyCustomer;
  x: any;
  modalRef: BsModalRef;
  message: string;
  objectID:any

  @ViewChild('addNewIdentificationModalRef', { static: true }) addNewIdentificationModalRef:AddNewIdentificationComponent ;
  constructor(
    private fb: FormBuilder,
    private companyAccService: CompanyServiceService,
    private rootFormGroup:FormGroupDirective,
    private modalService: BsModalService) { }

  customer: CompanyCustomer
  ngOnInit() {
    // this.renderer.addClass(document.body, 'right-menu');
  }
  // ngOnDestroy(): void {
  //   this.renderer.removeClass(document.body, 'right-menu');
  // }
  showAddNewModal(): void {
    this.addNewIdentificationModalRef.showModal();
    // this.addNewIdentificationModalRef.newCountry;
    // this.addNewIdentificationModalRef.newNumberType;
    // this.addNewIdentificationModalRef.newNumberId;
    // const newide:IidentificationNumbers={
    //   country:this.addNewIdentificationModalRef.newCountry,
    //   numberType:this.addNewIdentificationModalRef.newNumberType,
    //   numberID:this.addNewIdentificationModalRef.newNumberId
    //     };
  }


  ngOnChanges(changes: SimpleChanges) {
    this.form=this.rootFormGroup.control;
    this.generalCompanyForm=this.form.get(this.formGroupName) as FormGroup;
    // only run when property "data" changed
    if (changes['generalData'] && this.generalData) {
      console.log(this.generalData.accountID);
      this.objectID=this.generalData.objectID
      this.generalCompanyForm.patchValue({
        objectID:this.generalData.objectID,
        accountID: this.generalData.accountID,
        arabicName: this.generalData.arabicName,
        englishName: this.generalData.englishName,
        industry: this.generalData.industryCode,
        status: this.generalData.status,
        website: this.generalData.address[0],
        customertype: this.generalData.customerType,

      })
      this.generalData.identificationNumbers.forEach((item:IdentificationNumbers) =>{
        let resource = this.createtablerow();
        resource.patchValue({
           country: item.country,
           numbertype: item.numberType,
           numberID: item.numberID
           });
        this.identificationNumbersFormArray.push(resource);
      })
    }
    (<FormArray>this.form.get('identificationNumbersFormArray')).controls.forEach(control=>{
      control.disable();
    });
    // (<FormArray>this.form.get('identificationNumbersFormArray')).controls.map((c,i,array) => { });

  }

  onSubmit() {
    if (this.generalCompanyForm.valid) {
      console.log("Form Submitted!", this.generalCompanyForm.value);
      let temp:any=this.updatecompanygeneral(this.generalCompanyForm.value);
      // console.log(temp)
    }
    this.generalCompanyForm.get('arabicName').disable();
    this.generalCompanyForm.get('englishName').disable();
    this.generalCompanyForm.get('industry').disable();
    this.generalCompanyForm.get('status').disable();
    (<FormArray>this.form.get(this.formArrayName)).controls.forEach(control=>{
      control.disable();
    });

  }
  addIdentfication(tax:any){
    this.generalData.identificationNumbers.push(tax);
    let resource = this.createtablerow();
        resource.patchValue({
           country: tax.country,
           numbertype: tax.numberType,
           numberID: tax.numberID
           });
    this.identificationNumbersFormArray.push(resource);
    (<FormArray>this.form.get('identificationNumbersFormArray')).controls.forEach(control=>{
      control.disable();
    });
  }
  // creategeneralform() {
  //   this.generalComponyForm = this.fb.group({
  //     accountID: new FormControl({ value: '', disabled: this.edit }),
  //     arabicName: new FormControl({ value: '', disabled: this.edit }),
  //     englishName: new FormControl({ value: '', disabled: this.edit }),
  //     industry: new FormControl({ value: '', disabled: this.edit }),
  //     status: new FormControl({ value: '', disabled: this.edit }),
  //     identificationnumbers: this.fb.array([])
  //   });
  // }
  // update() {
  //   this.generalCompanyForm.get('arabicName').enable();
  //   this.generalCompanyForm.get('englishName').enable();
  //   this.generalCompanyForm.get('industry').enable();
  //   this.generalCompanyForm.get('status').enable();
  //   (<FormArray>this.form.get(this.formArrayName)).controls.forEach(control=>{
  //     control.enable();
  //   });

  // }
  updatecompanygeneral(companyGeneral:any){
    //   this.generalData.arabicName=companyGeneral.arabicName;
    //   this.generalData.englishName=companyGeneral.englishName;
    //   this.generalData.industry=companyGeneral.industry;
    //   this.generalData.status=companyGeneral.status;
    //   // update identificationnumbers
    //   for (let i=0, j=0;i<this.generalData.identificationNumbers.length,j<companyGeneral.identificationNumbers.length;i++,j++)
    // {
    //   this.generalData.identificationNumbers[i].country=companyGeneral.identificationNumbers[j].country,
    //   this.generalData.identificationNumbers[i].numberID=companyGeneral.identificationNumbers[j].numberID,
    //   this.generalData.identificationNumbers[i].numberType=companyGeneral.identificationNumbers[j].numberType
    // }
    let accObj:any={
      arabicName: companyGeneral.arabicName,
      englishName: companyGeneral.englishName,
      industry: companyGeneral.industry,
      ABCClassificationCode: 'A'
    }
    console.log(accObj)
    // let temp=this.companyAccService.updateCompanyCustomer(this.generalData.accountID.toString(),accObj)
    // .subscribe()
    //console.log(temp)

  }
  createtablerow(): FormGroup {
    return this.fb.group({
      country: new FormControl(''),
      numbertype: new FormControl(''),
      numberID: new FormControl(''),
    });
  }
  get identificationNumbersFormArray(): FormArray {
    return this.form.get(this.formArrayName) as FormArray;
  }
  addNewRow(): void {
    this.identificationNumbersFormArray.push(this.createtablerow());
  }
  openDeleteModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }
  confirm(rowIndex: number):void{
    this.identificationNumbersFormArray.removeAt(rowIndex);
    let id:string=this.generalData.identificationNumbers[rowIndex].objectID
    this.companyAccService.deleteTaxNumber(id).subscribe()
    this.modalRef.hide();
  }

  decline(): void {
    this.modalRef.hide();
  }

}
