/*import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Customer } from "./customer";
import { Environment } from "../../../environment/environment";

@Injectable({
  providedIn: "root",
})
export class CustomerService {
  private apiURL = Environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.apiURL}/customer/all`);
  }

  public getCustomerById(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.apiURL}/customer/find/${id}`);
  }

  public createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.apiURL}/customer/create`, customer);
  }

  public deleteCustomer(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiURL}/customer/delete/${id}`)
  }
}
*/
