import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SalesOrder } from 'src/app/data/sales-order';
import salesOrderDetailData, {
  SalesOrderDetails,
} from 'src/app/data/sales-order-detail';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SalesOrderService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getSalesOrder(user: any, BYD: any): Observable<SalesOrder[]> {
    // console.log("start");
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
    // console.log(location.host);
    return this.http.get<SalesOrder[]>(this.baseUrl + `salesorder`, httpOptions);
  }
  getSalesOrderDetails(id: String, BYD: any): Observable<SalesOrderDetails> {
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
    return this.http.get<SalesOrderDetails>(
      this.baseUrl + `salesorder/` + id,
      httpOptions
    );
  }
}
