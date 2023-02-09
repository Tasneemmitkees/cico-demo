import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerInvoice } from 'src/app/data/customer-invoice';
import { CustomerInvoiceDetails } from 'src/app/data/customer-invoice-detail';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CustomerInvoiceService {
  baseUrl = environment.baseUrl ;
  constructor(private http: HttpClient) {}

  getCustomerInvoice(): Observable<CustomerInvoice[]> {

    let BYD = JSON.parse(localStorage.getItem('BYD'));
    BYD.password = atob(BYD.password)
    let user = JSON.parse(localStorage.getItem('user'));
    const httpOptions = {
      params: { hostName: BYD.URL,userName:BYD.username,password:BYD.password},
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get<CustomerInvoice[]>(this.baseUrl+'custInvoice/'+user.bydesignUser,httpOptions);
  }
  getCustomerInvoiceDetails(invoiceID:String): Observable<CustomerInvoiceDetails> {
    let BYD = JSON.parse(localStorage.getItem('BYD'));
    BYD.password = atob(BYD.password)
    const httpOptions = {
      params: { hostName: BYD.URL,userName:BYD.username,password:BYD.password},
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get<CustomerInvoiceDetails>(this.baseUrl+'custInvoiceDetails/'+invoiceID,httpOptions);
  }
}
