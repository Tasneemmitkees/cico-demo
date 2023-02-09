import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html'
})

export class InvoiceListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'externalReference', 'date', 'total'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
];
