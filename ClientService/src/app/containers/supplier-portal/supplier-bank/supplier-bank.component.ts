import { Component, OnInit } from '@angular/core';
import { BankData } from 'src/app/data/SupplierPortal';

@Component({
  selector: 'app-supplier-bank',
  templateUrl: './supplier-bank.component.html'
})
export class SupplierBankComponent implements OnInit {

  data=generalData;
  constructor() { }

  ngOnInit() {
  }

}
const generalData:BankData[]=[
  {
    accountNumber:"123-345",
    bankCountry:"egypt",
    bankName:"qnb"
  },
  {
    accountNumber:"987-345",
    bankCountry:"egypt",
    bankName:"alahly"
  }
]
