import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../../../../data/user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserListService {
  baseUrl = environment.baseUrl ;

  constructor(private http: HttpClient) {}

  getAllUsers(tenantId: string): Observable<User[]> {
    const httpOptions = {
      params: {tenantId: tenantId},
      headers: new HttpHeaders({
        // tenantId: tenantId,
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get<User[]>(
      this.baseUrl+
      'users', httpOptions
    );
  }
  deleteUser(tenantId: string, userId: string): Observable<any> {
    const httpOptions = {
      params: {tenantId: tenantId},
      headers: new HttpHeaders({
        // tenantId: tenantId,
        'Content-Type': 'application/json',
      }),
    };
    return this.http.delete<any>(
      this.baseUrl+
      `user/${userId}`, httpOptions
    );
  }
}
