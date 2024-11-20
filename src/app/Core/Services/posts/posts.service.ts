import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/posts`);
  }
  public save(post: any): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/posts/save`, post);
  }
  public getById(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/posts/${id}`);
  }
  public deleteById(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/posts/delete/${id}`);
  }

}
