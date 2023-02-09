import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductCatalogService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getProductCategoryByID(id: String, BYD: any): Observable<any> {
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
    return this.http.get<any>(this.baseUrl + `ProductCategory/` + id, httpOptions);
  }
}
