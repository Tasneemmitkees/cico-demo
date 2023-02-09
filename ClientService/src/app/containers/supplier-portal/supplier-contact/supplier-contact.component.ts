import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Contact } from 'src/app/data/SupplierPortal';

@Component({
  selector: 'app-supplier-contact',
  templateUrl: './supplier-contact.component.html'
})
export class SupplierContactComponent implements OnInit {

  data=generalData;
  constructor() { }

  ngOnInit() {
  }

}
const generalData:Contact[]=[
  {
    name:"ali",
    department:"manager",
    function:"f",
    phone:123
  },
  {
    name:"alaa",
  department:"manager",
  function:"f2",
  phone:456
  }
]
