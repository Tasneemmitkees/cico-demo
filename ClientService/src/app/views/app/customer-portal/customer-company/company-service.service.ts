import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompanyCustomer} from '../../../../data/company-customer';
import { Attachement } from 'src/app/data/Customer';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CompanyServiceService {

  baseUrl = environment.baseUrl ;

  constructor(private http: HttpClient) { }
  //get
  getCompanyCustomer(id: any): Observable<CompanyCustomer> {
    //return this.http.get<Icompanycustomer>('http://34.76.184.138:2001/CompanyAccount/'+id.toString());
    let BYD = JSON.parse(localStorage.getItem('BYD'));
    BYD.password = atob(BYD.password)

    const httpOptions = {
      params: { hostName: BYD.URL,userName:BYD.username,password:BYD.password},
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
     return this.http.get<CompanyCustomer>(this.baseUrl+'CompanyAccount/'+id.toString(),httpOptions);
  }

  //update
  updateCompanyaccount(accObj:any): Observable<CompanyCustomer> {
    let BYD = JSON.parse(localStorage.getItem('BYD'));
    BYD.password = atob(BYD.password)
    const httpOptions = {
      params: { hostName: BYD.URL,userName:BYD.username,password:BYD.password},
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.patch<CompanyCustomer>(this.baseUrl+'CompanyAccount',accObj,httpOptions)
  }

  //add
  addTaxNumber(taxNumberObj:any): Observable<CompanyCustomer> {
    let BYD = JSON.parse(localStorage.getItem('BYD'));
    BYD.password = atob(BYD.password)
    const httpOptions = {
      params: { hostName: BYD.URL,userName:BYD.username,password:BYD.password},
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<CompanyCustomer>(this.baseUrl+'CompanyAccount/addTaxNumber',taxNumberObj,httpOptions)
  }
  addAddress(obj:any): Observable<CompanyCustomer> {
    let BYD = JSON.parse(localStorage.getItem('BYD'));
    BYD.password = atob(BYD.password)
    const httpOptions = {
      params: { hostName: BYD.URL,userName:BYD.username,password:BYD.password},
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<CompanyCustomer>(this.baseUrl+'CompanyAccount/addNewAddress',obj,httpOptions)
  }
  addAttachement(obj:Attachement):Observable<CompanyCustomer> {
    let BYD = JSON.parse(localStorage.getItem('BYD'));
    BYD.password = atob(BYD.password)
    const httpOptions = {
      params: { hostName: BYD.URL,userName:BYD.username,password:BYD.password},
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<CompanyCustomer>(this.baseUrl+'CompanyAccount/addAttachement',obj,httpOptions)
  }

  //delete
  deleteTaxNumber(id:String): Observable<CompanyCustomer> {
    let BYD = JSON.parse(localStorage.getItem('BYD'));
    BYD.password = atob(BYD.password)
    const httpOptions = {
      params: { hostName: BYD.URL,userName:BYD.username,password:BYD.password},
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.delete<CompanyCustomer>(this.baseUrl+'CompanyAccount/deleteTaxNumber/'+id,httpOptions)
  }
  deleteAttachement(id:String): Observable<CompanyCustomer> {
    let BYD = JSON.parse(localStorage.getItem('BYD'));
    BYD.password = atob(BYD.password)
    const httpOptions = {
      params: { hostName: BYD.URL,userName:BYD.username,password:BYD.password},
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.delete<CompanyCustomer>(this.baseUrl+'CompanyAccount/deleteAttachement/'+id,httpOptions)
  }
  deleteAddress(id:String): Observable<CompanyCustomer> {
    let BYD = JSON.parse(localStorage.getItem('BYD'));
    BYD.password = atob(BYD.password)
    const httpOptions = {
      params: { hostName: BYD.URL,userName:BYD.username,password:BYD.password},
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.delete<CompanyCustomer>(this.baseUrl+'CompanyAccount/deleteAddress/'+id,httpOptions)
  }

}
