import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IsalesQuotesDetails } from 'src/app/data/sales-quotations-details';
import { SalesQuotationsService } from 'src/app/views/app/customer-portal/sales-quotations/sales-quotations.service';

@Component({
  selector: 'app-rfq-detail',
  templateUrl: './rfq-detail.component.html',
})
export class RfqDetailComponent implements OnInit {

  public RfqID:number;
  rfqDetails:IsalesQuotesDetails;
  public edit: boolean = true;
  constructor(private route:ActivatedRoute,
              private salesQuoteService:SalesQuotationsService,) { }

  ngOnInit() {
    this.RfqID=+this.route.snapshot.params['id'];
    let BYD = JSON.parse(localStorage.getItem('BYD'));
    BYD.password = atob(BYD.password)
    this.salesQuoteService.getSalesQuotesDetails(this.RfqID.toString(), BYD)
    .subscribe((i)=>{
      this.rfqDetails=i;
      console.log("detail of RFQ",this.rfqDetails);
    })
  }

}
