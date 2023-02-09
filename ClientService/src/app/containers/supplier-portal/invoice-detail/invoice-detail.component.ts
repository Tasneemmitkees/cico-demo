import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html'
})
export class InvoiceDetailComponent implements OnInit {

  public invoiceID:number;
  constructor(private route:ActivatedRoute,) { }

  ngOnInit() {
    this.invoiceID=+this.route.snapshot.params['id'];
  }

}
