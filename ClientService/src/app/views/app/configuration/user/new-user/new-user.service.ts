import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NewUserService {
  baseUrl = environment.baseUrl ;
  constructor(private http: HttpClient) {}

  createUser(tenantId: string, body: any): Observable<any> {
    const httpOptions = {
      params: { tenantId: tenantId },
      headers: new HttpHeaders({
        // tenantId: tenantId,
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<any>(this.baseUrl+`user/register`, body, httpOptions);
  }
  getNextId(tenantId: string): Observable<any> {
    const httpOptions = {
      params: { tenantId: tenantId },
      headers: new HttpHeaders({
        // tenantId: tenantId,
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get<any>(this.baseUrl+`nextuser`, httpOptions);
  }

  getAllIndividualCustomer(): Observable<any> {
    let BYD = JSON.parse(localStorage.getItem('BYD'));

    const httpOptions = {
      // params: { tenantId: tenantId },
      params: { hostName: BYD.URL,userName:BYD.username,password:atob(BYD.password)},

      headers: new HttpHeaders({
        // tenantId: tenantId,
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get<any>(this.baseUrl+`IndividualAccount`, httpOptions);
  }
  getAllCompanyCustomer(): Observable<any> {
    let BYD = JSON.parse(localStorage.getItem('BYD'));

    const httpOptions = {
      // params: { tenantId: tenantId },
      params: { hostName: BYD.URL,userName:BYD.username,password:atob(BYD.password)},


      headers: new HttpHeaders({
        // tenantId: tenantId,
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get<any>(this.baseUrl+`CompanyAccount`, httpOptions);
  }
  getAllPricelists(): Observable<any> {
    let BYD = JSON.parse(localStorage.getItem('BYD'));

    const httpOptions = {
      // params: { tenantId: tenantId },
      params: { hostName: BYD.URL,userName:BYD.username,password:atob(BYD.password)},

      headers: new HttpHeaders({
        // tenantId: tenantId,
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get<any>(this.baseUrl+`pricelists`, httpOptions);
  }
}
