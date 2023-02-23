import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
constructor(private http: HttpClient) {}
postEvent(event:any): Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders({
      // tenantId: tenantId,
      'Content-Type': 'application/json',
    }),
  };
  console.log("event",event)
  return this.http.post<any>(
    'http://localhost:8003/api/v1/SalesOrder',event,httpOptions
  );
}

}






