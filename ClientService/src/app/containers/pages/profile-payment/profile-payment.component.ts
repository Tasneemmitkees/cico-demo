import { Component, ElementRef, Input, OnInit, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import  { BankData } from '../../../data/Customer';
@Component({
  selector: 'app-profile-payment',
  templateUrl: './profile-payment.component.html',
  styleUrls: ['./profile-payment.component.scss']
})
export class ProfilePaymentComponent implements OnInit {

  public paymentform: FormGroup;
  constructor(private fb: FormBuilder,private rootFormGroup:FormGroupDirective) { }

  @Input() generalData: any;
  @Input() formArrayName:string;

  ngOnChanges(changes: SimpleChanges) {
    // this.createForm();
    this.paymentform=this.rootFormGroup.control;
    // only run when property "data" changed
    if (changes['generalData'] && this.generalData) {
      this.generalData.bankData.forEach((item: BankData) => {

        let resource = this.createtablerow();
        resource.patchValue({
          bankcountry: item.bankCountry,
          bankname: item.bankName,
          accountnumber: item.accountNumber,
        });
        this.bankFormArray.push(resource);
      });
    }
    // this.disableInputs();
    (<FormArray>this.paymentform.get(this.formArrayName)).controls.forEach(control=>{
      control.disable();
    });
  }


  ngOnInit() {

  }
  onSubmit() {
    if (this.paymentform.valid) {
      console.log("Form Submitted!", this.paymentform.value);
    }
    this.disableInputs();
  }
  disableInputs() {
    (<FormArray>this.paymentform.get('tableRowArray'))
      .controls
      .forEach(control => {
        control.disable();
      })
  }
  EnableInputs() {
    (<FormArray>this.paymentform.get('tableRowArray'))
      .controls
      .forEach(control => {
        control.enable();
      })
  }
  edit() {
    this.EnableInputs();
  }
  createForm(): void {
    this.paymentform = this.fb.group({
      //tableRowArray is a FormArray which holds a list of FormGroups
      tableRowArray: this.fb.array([])
    })
  }
  createtablerow(): FormGroup {
    return this.fb.group({
      bankcountry: new FormControl(''),
      bankname: new FormControl(''),
      accountnumber: new FormControl(''),
      iban: new FormControl(''),
    });
  }
  get bankFormArray(): FormArray {
    return this.paymentform.get(this.formArrayName) as FormArray;
  }
  addNewRow(): void {
    this.bankFormArray.push(this.createtablerow());
  }
  onDeleteRow(rowIndex: number): void {
    this.bankFormArray.removeAt(rowIndex);
  }


}
