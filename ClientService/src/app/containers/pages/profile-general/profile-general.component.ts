import { Component, Input, OnInit, SimpleChanges, TemplateRef, ViewChild} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { IndividualCustomer } from 'src/app/data/individual-customer';
import {IdentificationNumbers} from '../../../data/Customer';
import { IndividualServiceService } from 'src/app/views/app/customer-portal/customer-individual/individual-service.service';
import { AddIndividualIdentificationComponent } from '../../add-new-modal/add-individual-identification/add-individual-identification.component';

@Component({
  selector: 'app-profile-general',
  templateUrl: './profile-general.component.html'
})
export class ProfileGeneralComponent implements OnInit {
  @Input() generalData: IndividualCustomer;
  @Input() formGroupName: string;
  @Input() formArrayName:string;

  public edit: boolean = true;

  generalIndividualFormGroup: FormGroup;
  rootForm:FormGroup;

  customer: IndividualCustomer;

  modalRef: BsModalRef;
  objectID:any;

  @ViewChild('addNewIdentificationModalRef', { static: true }) addNewIdentificationModalRef:AddIndividualIdentificationComponent;

  constructor(private fb: FormBuilder,
              private rootFormGroup:FormGroupDirective,
              private modalService: BsModalService,
              private individualService:IndividualServiceService) {}

  ngOnChanges(changes: SimpleChanges) {
    this.rootForm=this.rootFormGroup.control;
    this.generalIndividualFormGroup=this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
    // this.creategeneralform();
    // only run when property "data" changed
    if (changes['generalData'] && this.generalData) {
      this.objectID =this.generalData.objectID;;
      console.log("individual customer",this.generalData);
      this.generalIndividualFormGroup.patchValue({
        customerid: this.generalData.customerID,
        firstname: this.generalData.firstName,
        title: this.generalData.title,
        lastname: this.generalData.lastName,
        gender: this.generalData.gender,
        dateofbirth: this.generalData.dateOfBirth,
        status: this.generalData.status,
        age: this.generalData.age,
        nationality: "", //TODO
        // customertype: 'individual',
      })

      this.generalData.identificationNumbers.forEach((item: IdentificationNumbers) => {
        let resource = this.createtablerow();
        resource.patchValue({
          country: item.country,
          numberType: item.numberType,
          numberID: item.numberID
        });
        this.identificationNumbersFormArray.push(resource);
      });
    }
    (<FormArray>this.rootForm.get('identificationNumbersFormArray')).controls.forEach(control=>{
      control.disable();
    });
  }
  showAddNewModal(): void {
    this.addNewIdentificationModalRef.showModal();
  }
  ngOnInit(): void {
  }
  createtablerow(): FormGroup {
    return this.fb.group({
      country: new FormControl(''),
      numberType: new FormControl(''),
      numberID: new FormControl(''),
    });
  }
  get identificationNumbersFormArray(): FormArray {
    return this.rootForm.get(this.formArrayName) as FormArray;
  }
  addNewRow(): void {
    this.identificationNumbersFormArray.push(this.createtablerow());
  }
  addIdentfication(tax:IdentificationNumbers):void{
    this.generalData.identificationNumbers.push(tax);
    let resource = this.createtablerow();
        resource.patchValue({
           country: tax.country,
           numbertype: tax.numberType,
           numberID: tax.numberID
           });
    this.identificationNumbersFormArray.push(resource);
    (<FormArray>this.rootForm.get('identificationNumbersFormArray')).controls.forEach(control=>{
      control.disable();
    });
  }
  onDeleteRow(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }
  confirm(rowIndex: number):void{
    this.identificationNumbersFormArray.removeAt(rowIndex);
    this.individualService.deleteTaxNumber(this.generalData.identificationNumbers[rowIndex].objectID).subscribe()
    this.modalRef.hide();
  }

  decline(): void {
    this.modalRef.hide();
  }


}
