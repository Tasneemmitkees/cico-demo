import { Component, OnInit } from '@angular/core';
import { PurchaseOrder } from 'src/app/data/SupplierPortal';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html'
})
export class PurchaseOrderComponent implements OnInit {

  columns: string[]  = ['id','status','expectedAcknowledgement','deliveryDate','netValue'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
const ELEMENT_DATA: PurchaseOrder[] = [
  {id: 1, expectedAcknowledgement: 'test', deliveryDate:"22-11-2022", netValue: 8,status:"active"},
  {id: 2, expectedAcknowledgement: 'sa', deliveryDate:"22-11-2022", netValue: 9,status:"inactive"},
];
