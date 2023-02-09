import { Component, OnInit } from '@angular/core';
import { rfq } from 'src/app/data/SupplierPortal';

@Component({
  selector: 'app-rfq',
  templateUrl: './rfq.component.html'
})
export class RfqComponent implements OnInit {

  columns: string[]  = ['id','description','subdeadline','status'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
const ELEMENT_DATA: rfq[] = [
  {id: 1, subDeadline: '22-10-2022', status:"active", description: 'one'},
  {id: 2, subDeadline: '24-10-2022', status:"in active", description: 'two'},
];
