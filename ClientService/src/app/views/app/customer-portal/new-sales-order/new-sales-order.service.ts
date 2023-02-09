import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { AnyRecord } from 'dns';
import { Observable } from 'rxjs';
import { IndividualCustomer } from 'src/app/data/individual-customer';
import { SalesOrderItems } from 'src/app/data/sales-order-detail';
import { environment } from 'src/environments/environment';
import { NewSalesOrder, OrderItem } from '../../../../data/NewSalesOrder';

@Injectable({
  providedIn: 'root',
})
export class NewSalesOrderService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getCompanyCustomer(id: string): Observable<any> {
    let BYD = JSON.parse(localStorage.getItem('BYD'));
    BYD.password = atob(BYD.password)
    const httpOptions = {
      params: {
        hostName: BYD.URL,
        userName: BYD.username,
        password: BYD.password,
      },
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get<any>(
      this.baseUrl + 'CompanyAccount/' + id, httpOptions
    );
  }
  getIndividualCustomer(id: string): Observable<any> {
    let BYD = JSON.parse(localStorage.getItem('BYD'));
    BYD.password = atob(BYD.password)
    const httpOptions = {
      params: {
        hostName: BYD.URL,
        userName: BYD.username,
        password: BYD.password,
      },
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get<any>(
      this.baseUrl + 'IndividualAccount/' + id, httpOptions
    );
  }


  createSalesOrder(order: NewSalesOrder): Observable<SalesOrderItems> {
    let user = JSON.parse(localStorage.getItem('user'));
    let BYD = JSON.parse(localStorage.getItem('BYD'));
    BYD.password = atob(BYD.password)
    const httpOptions = {
      params: {
        hostName: BYD.URL,
        userName: BYD.username,
        password: BYD.password,
      },
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<SalesOrderItems>(this.baseUrl + 'salesorder', order, httpOptions);
  }

  getMaterialWithPrice(): Observable<OrderItem> {
    let user = JSON.parse(localStorage.getItem('user'));
    let BYD = JSON.parse(localStorage.getItem('BYD'));
    BYD.password = atob(BYD.password)
    const httpOptions = {
      params: {
        salesOrg: user.salesOrgnaisation,
        DC: user.distributionChannel,
        priceList: user.priceList,
        hostName: BYD.URL,
        userName: BYD.username,
        password: BYD.password,
      },
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get<OrderItem>(
      this.baseUrl + 'materialprice',
      httpOptions
    );
  }
  getMaterialWithPriceSearch(search: any): Observable<OrderItem> {
    let user = JSON.parse(localStorage.getItem('user'));
    let BYD = JSON.parse(localStorage.getItem('BYD'));
    BYD.password = atob(BYD.password)
    const httpOptions = {
      params: {
        salesOrg: user.salesOrgnaisation,
        DC: user.distributionChannel,
        priceList: user.priceList,
        search: search,
        hostName: BYD.URL,
        userName: BYD.username,
        password: BYD.password,
      },
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get<OrderItem>(
      this.baseUrl + 'materialprice/search',
      httpOptions
    );
  }

  // getMaterialWithPriceSearch(): Observable<SalesOrderItems> {
  //   return this.http.get<SalesOrderItems>(
  //     'materialprice/search'
  //   );
  // }
}
