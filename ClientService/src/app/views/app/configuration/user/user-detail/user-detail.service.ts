import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserDetailService {
  baseUrl = environment.baseUrl ;
  constructor(private http: HttpClient) {}

  getOneUser(tenantId: string, userId: string): Observable<any> {
    const httpOptions = {
      params: { tenantId: tenantId },
      headers: new HttpHeaders({
        // tenantId: tenantId,
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get<any>(this.baseUrl+`user/${userId }`, httpOptions);
  }

  updateUser(tenantId: string, userId: number, body: any): Observable<any> {
    const httpOptions = {
      params: { tenantId: tenantId },
      headers: new HttpHeaders({
        // tenantId: tenantId,
        'Content-Type': 'application/json',
      }),
    };
    return this.http.put<any>(this.baseUrl+`user/${userId}`, body, httpOptions);
  }
}
