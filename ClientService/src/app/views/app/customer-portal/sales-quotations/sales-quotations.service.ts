import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IsalesQuotation } from 'src/app/data/sales-quotations';
import { IsalesQuotesDetails } from 'src/app/data/sales-quotations-details';
import { rfq, RFQ } from 'src/app/data/RFQ';
import { SalesOrderDetails } from 'src/app/data/sales-order-detail';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SalesQuotationsService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getSalesQuotes(BYD: any, user: any): Observable<IsalesQuotation[]> {
    // return this.http.get<IsalesQuotation>('http://35.188.160.179:2001/salesquotes');
    const httpOptions = {
      params: {
        hostName: BYD.URL,
        userName: BYD.username,
        password: BYD.password,
        customerID: user.bydesignUser,
      },
      headers: new HttpHeaders({
        // tenantId: tenantId,
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get<IsalesQuotation[]>(
      this.baseUrl + 'salesquotes',
      httpOptions
    );
  }
  getSalesQuotesDetails(id: String, BYD: any): Observable<IsalesQuotesDetails> {
    console.log(id);
    const httpOptions = {
      params: {
        hostName: BYD.URL,
        userName: BYD.username,
        password: BYD.password,
        // customerID: user.bydesignUser,
      },
      headers: new HttpHeaders({
        // tenantId: tenantId,
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get<IsalesQuotesDetails>(
      this.baseUrl + 'salesquotes/' + id,
      httpOptions
    );
  }

  createSalesQoute(obj: RFQ): Observable<IsalesQuotesDetails> {
    let BYD = JSON.parse(localStorage.getItem('BYD'));
    BYD.password = atob(BYD.password)
    let user = JSON.parse(localStorage.getItem('user'));
    const httpOptions = {
      params: {
        hostName: BYD.URL,
        userName: BYD.username,
        password: BYD.password,
        customerID: user.bydesignUser,
      },
      headers: new HttpHeaders({
        // tenantId: tenantId,
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<IsalesQuotesDetails>(
      this.baseUrl + 'salesquotes',
      obj,
      httpOptions
    );
  }

  getRFQ(BYD: any, user: any): Observable<rfq[]> {
    const httpOptions = {
      params: {
        hostName: BYD.URL,
        userName: BYD.username,
        password: BYD.password,
        customerID: user.bydesignUser,
      },
      headers: new HttpHeaders({
        // tenantId: tenantId,
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get<rfq[]>(this.baseUrl + 'RFQ', httpOptions);
  }

  rejectSalesQuote(
    id: String,
    reason: String,
    BYD: any
  ): Observable<IsalesQuotesDetails> {
    const httpOptions = {
      params: {
        hostName: BYD.URL,
        userName: BYD.username,
        password: BYD.password,
        // customerID: user.bydesignUser,
      },
      headers: new HttpHeaders({
        // tenantId: tenantId,
        'Content-Type': 'application/json',
      }),
    };
    return this.http.patch<IsalesQuotesDetails>(
      this.baseUrl + 'SalesQuotation/Reject/' + id + '/' + reason,
      null,
      httpOptions
    );
  }
  createSalesOrderWithRef(
    quoteID: String,
    BYD: any,
    user: any
  ): Observable<SalesOrderDetails> {
    // return this.http.get<SalesOrderDetails>(`http://34.122.72.182:2001/salesorder/`+id);
    let buyerPartyID = '1';
    const httpOptions = {
      params: {
        hostName: BYD.URL,
        userName: BYD.username,
        password: BYD.password,
        // customerID: user.bydesignUser,
      },
      headers: new HttpHeaders({
        // tenantId: tenantId,
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<SalesOrderDetails>(
      this.baseUrl +
        `salesorder/addWithRef/` +
        quoteID +
        '/' +
        user.bydesignUser,
      null,
      httpOptions
    );
  }
  getMaterial(): Observable<SalesOrderDetails> {
    let user = JSON.parse(localStorage.getItem('user'));
    let BYD = JSON.parse(localStorage.getItem('BYD'));
    BYD.password = atob(BYD.password)

    const httpOptions = {
      //params: { salesOrg: "S1330",DC:"01"},
      params: {
        salesOrg: user.salesOrgnaisation,
        DC: user.distributionChannel,
        hostName: BYD.URL,
        userName: BYD.username,
        password: BYD.password,
      },
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get<SalesOrderDetails>(
      this.baseUrl +
        //'material',httpOptions
        'material',
      httpOptions
    );
  }
  getMaterialDetails(materialID: String): Observable<SalesOrderDetails> {
    let user = JSON.parse(localStorage.getItem('user'));
    let BYD = JSON.parse(localStorage.getItem('BYD'));
    BYD.password = atob(BYD.password)
    const httpOptions = {
      //params: { salesOrg: "S1330",DC:"01"},
      params: {
        // salesOrg: user.salesOrgnaisation,
        // DC: user.distributionChannel,
        hostName: BYD.URL,
        userName: BYD.username,
        password: BYD.password,
      },
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.get<SalesOrderDetails>(
      this.baseUrl + 'materialDetails/' + materialID, httpOptions
    );
  }

  getMaterialSearch(search: any): Observable<SalesOrderDetails> {
    let BYD = JSON.parse(localStorage.getItem('BYD'));
    BYD.password = atob(BYD.password)
    let user = JSON.parse(localStorage.getItem('user'));
    const httpOptions = {
      params: {
        salesOrg: user.salesOrgnaisation,
        DC: user.distributionChannel,
        search: search,
        hostName: BYD.URL,
        userName: BYD.username,
        password: BYD.password,
      },
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get<SalesOrderDetails>(
      this.baseUrl + 'material/search',
      httpOptions
    );
  }
}
