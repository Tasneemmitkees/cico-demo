import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BydConfigurationService {
  baseUrl = environment.baseUrl ;

constructor(private http: HttpClient) {}

getConfig(tenantId: string): Observable<any> {
  const httpOptions = {
    params: {tenantId: tenantId},
    headers: new HttpHeaders({
      // tenantId: tenantId,
      'Content-Type': 'application/json',
    }),
  };
  return this.http.get<any>(this.baseUrl+
    'configuration', httpOptions
  );
}
getUserUUID(id: String, BYD: any): Observable<any> {
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
  return this.http.get<any>(this.baseUrl + `accountuuid/` + id, httpOptions);
}
ping(config:any): Observable<any> {
  console.log(config);
  const httpOptions = {
    params: {hostName: config.URL, username: config.username, password: config.password},
    headers: new HttpHeaders({
      // tenantId: tenantId,
      'Content-Type': 'application/json',
    }),
    // observe: "response"
  };
  return this.http.get<any>(this.baseUrl+
    'ping', httpOptions
  );
}

addConfig(tenantId: string, body: string): Observable<any> {
  const httpOptions = {
    params: {tenantId: tenantId},
    headers: new HttpHeaders({
      // tenantId: tenantId,
      'Content-Type': 'application/json',
    }),
  };
  return this.http.post<any>(this.baseUrl+
    'configuration', body, httpOptions
  );
}

}
