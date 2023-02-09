import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HomePageService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getSalesOrderVolume(customerUUID: any, BYD: any): Observable<any> {
    const httpOptions = {
      params: {
        hostName: BYD.URL,
        userName: BYD.technicalUsername,
        password: BYD.technicalPassword,
        customerUUID: customerUUID,
      },
      headers: new HttpHeaders({
        // tenantId: tenantId,
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get<any>(
      this.baseUrl + `salesordervolume`,
      httpOptions
    );
  }
  getInvoicesVolume(customerUUID: any, BYD: any): Observable<any> {
    // console.log(BYD);

    const httpOptions = {
      params: {
        hostName: BYD.URL,
        userName: BYD.technicalUsername,
        password: BYD.technicalPassword,
        customerUUID: customerUUID,
      },
      headers: new HttpHeaders({
        // tenantId: tenantId,
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get<any>(
      this.baseUrl + `invoicevolume`,
      httpOptions
    );
  }
}
