import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  public getAll():  Observable<any> {
    return this.http.get<any>(`http://localhost:8080/products`);
  }
  public save(product: any): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/products/save`, product);
  }
  public findById(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/products/${id}`);
  }
  public deleteById(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/products/delete/${id}`);
  }
}
