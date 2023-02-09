import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { Contact, CompanyCustomer } from '../../../data/company-customer';

@Component({
  selector: 'app-company-contact',
  templateUrl: './company-contact.component.html',
})
export class CompanyContactComponent implements OnInit {
  contactCompanyForm: FormGroup;

  @Input() formArrayName:string;
  @Input() contactData: Contact[];
  selection = new SelectionModel<Contact>(false,[]);
  Selected?:Contact;

  data: CompanyCustomer;
  public edit: boolean = true;

  constructor(private fb: FormBuilder,private rootFormGroup:FormGroupDirective) {}

  ngOnInit() {

  }
  ngOnChanges(changes: SimpleChanges) {
    this.contactCompanyForm=this.rootFormGroup.control;
    if (changes['contactData'] && this.contactData){
      this.contactData.forEach((item: Contact) => {
        let resource = this.createtablerow();
        resource.patchValue({
          name: item.name,
          function: item.function,
          department: item.department,
          phone: item.phone,
          fax: item.fax,
          mobileNumber: item.mobileNumber,
          email: item.email,
          preferredMethodOfCommunication: item.preferredMethodOfCommunication,
        });
        this.contactFormArray.push(resource);
      });
    }
    (<FormArray>this.contactCompanyForm.get('contactCompanyFormArray')).controls.forEach(control=>{
      control.disable();
    });
  }
  onSubmit() {
    if (this.contactCompanyForm.valid) {
      console.log('Form Submitted!', this.contactCompanyForm.value);
    }
  }
  // createForm(): void {
  //   this.contactCompanyForm = this.fb.group({
  //     //tableRowArray is a FormArray which holds a list of FormGroups
  //     tableRowArray: this.fb.array([]),
  //   });
  // }
  createtablerow(): FormGroup {
    return this.fb.group({
      name: new FormControl(''),
      function: new FormControl(''),
      department: new FormControl(''),
      phone: new FormControl(''),
      fax: new FormControl(''),
      mobileNumber: new FormControl(''),
      email: new FormControl(''),
      preferredMethodOfCommunication: new FormControl(''),
    });
  }
  get contactFormArray(): FormArray {
    return this.contactCompanyForm.get(this.formArrayName) as FormArray;
  }
  addNewRow(): void {
    const newRow :Contact= {
     name:'',
     function:'',
     department:'',
     phone:null,
     fax:null,
     mobileNumber:null,
     email:'',
     preferredMethodOfCommunication:''
    };
    console.log("new contact data",this.contactData=[...this.contactData,newRow]);
    this.contactFormArray.push(this.createtablerow());
  }
  onDeleteRow(name,rowIndex: number): void {
    this.contactData = this.contactData.filter((u) => u.name !== name);
    this.contactFormArray.removeAt(rowIndex);
  }
  selectRow(row:any){
    this.selection.toggle(row);
  }
  onSelect(item:Contact):void
  {
    this.Selected=item;
  }
}
