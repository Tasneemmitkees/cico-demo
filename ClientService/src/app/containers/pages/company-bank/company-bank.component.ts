import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import {BankData} from '../../../data/Customer';

@Component({
  selector: 'app-company-bank',
  templateUrl: './company-bank.component.html'
})
export class CompanyBankComponent implements OnInit {

  bankCompanyForm:FormGroup;

  @Input() formArrayName:string;
  @Input() bankData: BankData[];
  selection = new SelectionModel<BankData>(false,[]);
  Selected?:any;
  constructor(private fb: FormBuilder,private rootFormGroup:FormGroupDirective) { }

  ngOnInit() {

  }
  ngOnChanges(changes: SimpleChanges) {
    this.bankCompanyForm=this.rootFormGroup.control;
    if (changes['bankData'] && this.bankData){
      this.bankData.forEach((item:BankData)=>{
        let resource = this.createtablerow();
        resource.patchValue({
          bankCountry: item.bankCountry,
          bankName: item.bankName,
          accountNumber:item.accountNumber
        });
        this.bankFormArray.push(resource);
      });
    }
    (<FormArray>this.bankCompanyForm.get('bankCompanyFormArray')).controls.forEach(control=>{
      control.disable();
    });

  }
  onSubmit(){
    if (this.bankCompanyForm.valid) {
      console.log("Form Submitted!",this.bankCompanyForm.value);
    }
  }
  // createForm(): void {
  //   this.bankCompanyForm = this.fb.group({
  //       //tableRowArray is a FormArray which holds a list of FormGroups
  //       tableRowArray: this.fb.array([])
  //   })
  // }
  createtablerow():FormGroup{
    return this.fb.group({
      bankCountry: new FormControl(''),
      bankName: new FormControl(''),
      accountNumber: new FormControl('')
    });
  }
  get bankFormArray(): FormArray {
    return this.bankCompanyForm.get(this.formArrayName) as FormArray;
  }
  item:BankData;
  addNewRow(): void {
    const newRow :BankData= {
      bankCountry:'',
      bankName: '',
      accountNumber: null,
    };
    console.log("first",this.bankData=[...this.bankData,newRow]);
    this.bankFormArray.push(this.createtablerow());
  }
  onDeleteRow(bankCountry,rowIndex:number): void {

    this.bankData = this.bankData.filter((u) => u.bankCountry !== bankCountry);
    this.bankFormArray.removeAt(rowIndex);
  }
  // selectRow(row:any){
  //   console.log(this.selection.toggle(row));
  // }
  onSelect(item:any):void
  {
    this.Selected=item;
  }

}
