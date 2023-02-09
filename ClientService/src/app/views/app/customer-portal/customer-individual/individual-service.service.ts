import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IndividualCustomer } from '../../../../data/individual-customer';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class IndividualServiceService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }
  //get
  getindividualcustomer(id: any): Observable<IndividualCustomer> {
    let BYD = JSON.parse(localStorage.getItem('BYD'));
    BYD.password = atob(BYD.password)
    const httpOptions = {
      params: { hostName: BYD.URL, userName: BYD.username, password: BYD.password },
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get<IndividualCustomer>(this.baseUrl + 'IndividualAccount/' + id.toString(), httpOptions);
  }

  //update
  updateIndividualAccount(accObj: any): Observable<IndividualCustomer> {
    let BYD = JSON.parse(localStorage.getItem('BYD'));
    BYD.password = atob(BYD.password)
    const httpOptions = {
      params: { hostName: BYD.URL, userName: BYD.username, password: BYD.password },
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.patch<IndividualCustomer>(this.baseUrl + 'IndividualAccount', accObj, httpOptions)
  }

  //add
  addTaxNumber(taxNumberObj: any): Observable<IndividualCustomer> {
    let BYD = JSON.parse(localStorage.getItem('BYD'));
    BYD.password = atob(BYD.password)
    const httpOptions = {
      params: { hostName: BYD.URL, userName: BYD.username, password: BYD.password },
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<IndividualCustomer>(this.baseUrl + 'IndividualAccount/Tax', taxNumberObj, httpOptions)
  }
  addAddress(obj: any): Observable<IndividualCustomer> {
    let BYD = JSON.parse(localStorage.getItem('BYD'));
    BYD.password = atob(BYD.password)
    const httpOptions = {
      params: { hostName: BYD.URL, userName: BYD.username, password: BYD.password },
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<IndividualCustomer>(this.baseUrl + 'IndividualAccount/addNewAddress', obj, httpOptions);
  }
  addAttachement(obj: any): Observable<IndividualCustomer> {
    let BYD = JSON.parse(localStorage.getItem('BYD'));
    BYD.password = atob(BYD.password)
    const httpOptions = {
      params: { hostName: BYD.URL, userName: BYD.username, password: BYD.password },
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<IndividualCustomer>(this.baseUrl + 'IndividualAccount/Attachement', obj, httpOptions)
  }

  //delete
  deleteTaxNumber(id: String): Observable<IndividualCustomer> {
    let BYD = JSON.parse(localStorage.getItem('BYD'));
    BYD.password = atob(BYD.password)
    const httpOptions = {
      params: { hostName: BYD.URL, userName: BYD.username, password: BYD.password },
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.delete<IndividualCustomer>(this.baseUrl + 'IndividualAccount/Tax/' + id, httpOptions)
  }
  deleteAttachement(id: String): Observable<IndividualCustomer> {
    let BYD = JSON.parse(localStorage.getItem('BYD'));
    BYD.password = atob(BYD.password)
    const httpOptions = {
      params: { hostName: BYD.URL, userName: BYD.username, password: BYD.password },
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.delete<IndividualCustomer>(this.baseUrl + 'IndividualAccount/Attachement/' + id, httpOptions)
  }
  deleteAddress(id: String): Observable<IndividualCustomer> {
    let BYD = JSON.parse(localStorage.getItem('BYD'));
    BYD.password = atob(BYD.password)
    const httpOptions = {
      params: { hostName: BYD.URL, userName: BYD.username, password: BYD.password },
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.delete<IndividualCustomer>(this.baseUrl + 'IndividualAccount/Address/' + id, httpOptions)
  }


}
