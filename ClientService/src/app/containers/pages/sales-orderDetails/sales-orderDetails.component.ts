import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ColumnMode } from '@swimlane/ngx-datatable';
import salesOrderDetailData, {
  SalesOrderDetails,
} from 'src/app/data/sales-order-detail';
import { SalesOrderService } from 'src/app/views/app/customer-portal/sales-order/sales-order.service';

@Component({
  selector: 'app-sales-orderDetails',
  templateUrl: './sales-orderDetails.component.html',
})
export class SalesOrderDetailsComponent implements OnInit {
  public salesOrderId: number;
  rows: SalesOrderDetails;
  ColumnMode = ColumnMode;
  salesOrderDetails: SalesOrderDetails;
  Selected?: any;
  public edit: boolean = true;
  orderForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private salesOrderService: SalesOrderService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    let BYD = JSON.parse(localStorage.getItem('BYD'));
    BYD.password = atob(BYD.password)
    this.salesOrderId = +this.route.snapshot.params['id'];
    this.salesOrderService
      .getSalesOrderDetails(this.salesOrderId.toString(), BYD)
      .subscribe((i) => {
        this.salesOrderDetails = i;
        console.log('detail', this.salesOrderDetails);
        this.rows = i;
      });
    this.createForm();
  }
  getSalesOrderId(salesOrderId: number) {
    salesOrderDetailData.find((data) => data.id === salesOrderId);
  }
  onSelect(item: any): void {
    this.Selected = item;
  }
  createForm() {
    this.orderForm = this.fb.group({
      externalRefrence: new FormControl(''),
      notes: new FormControl(''),
    });
  }
  onSubmit() {
    if (this.orderForm.valid) {
      console.log('order detail', this.orderForm.value);
    }
  }
  showPdf(rowIndex:number) {
    console.log("index",this.rows[0].attachment[rowIndex]);
    const linkSource =
      'data:image.jpg'+//this.rows.attachment[rowIndex].type
      +';base64,' +this.rows[0].attachment[rowIndex].doc;
    const downloadLink = document.createElement('a');
    let fileName = this.rows[0].attachment[rowIndex].title;
    downloadLink.href = linkSource;
    downloadLink.download = fileName.toString();
    downloadLink.click();
  }
}
