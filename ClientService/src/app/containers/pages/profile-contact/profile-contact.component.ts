import { Component, OnInit,Output,EventEmitter, Input, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import {ContactServiceService} from './contact-service.service';

@Component({
  selector: 'app-profile-contact',
  templateUrl: './profile-contact.component.html',
})
export class ProfileContactComponent implements OnInit {

  public edit: boolean = true;
  myform:FormGroup;
  // contact:Icontactinfo;
  @Input() generalData: any;
  @Input() formArrayName:string;


  constructor( private contactservice:ContactServiceService,private fb: FormBuilder,private rootFormGroup:FormGroupDirective) { }

  // data=this.contactservice.allcontact;

  ngOnInit() {
    this.createformcontrol();

  }
  ngOnChanges(changes: SimpleChanges) {

    // this.myform=this.rootFormGroup.control;
    // only run when property "data" changed
    if (changes['generalData'] && this.generalData) {
      this.myform.patchValue({
        phone:this.generalData.contact[0].phone,
        mobileNumber: this.generalData.contact[0].mobileNumber,
        email:this.generalData.contact[0].email,
        // facebookAccount: this.generalData.contactInformation[0].facebookAccount || '',
        // whatsAppNumber: this.generalData.contactInformation[0].whatsAppNumber || '',
        preferredMethodOfCommunication: this.generalData.contact[0].preferredMethodOfCommunication,
      })
    }
  }
  createformcontrol(){
    this.myform=this.fb.group({
      phone:new FormControl({value:'',disabled:this.edit} ),
      mobileNumber: new FormControl({value:'',disabled:this.edit}),
      email:new FormControl({value:'',disabled:this.edit}),
      // facebookAccount: new FormControl({value:'',disabled:this.edit}),
      // whatsAppNumber: new FormControl({value:'',disabled:this.edit}),
      preferredMethodOfCommunication: new FormControl({value:'',disabled:this.edit}),
    });
  }
  update(){
    this.myform.get('phone').enable();
    this.myform.get('mobileNumber').enable();
    this.myform.get('email').enable();
    // this.myform.get('facebookAccount').enable();
    // this.myform.get('whatsAppNumber').enable();
    this.myform.get('preferredMethodOfCommunication').enable();
    // this.contactservice.updatecontact(this.contact);
  }
  onSubmit() {
    if (this.myform.valid) {
      console.log("Form Submitted!",this.myform.value);
    }
    this.myform.get('phone').disable();
    this.myform.get('mobileNumber').disable();
    this.myform.get('email').disable();
    // this.myform.get('facebookAccount').disable();
    // this.myform.get('whatsAppNumber').disable();
    this.myform.get('preferredMethodOfCommunication').disable();

  }

}
