import { Injectable } from '@angular/core';
import {Environment} from "../../../../environment/environment";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private env= Environment.apiBaseUrl
  private isLoggedInSubject= new BehaviorSubject<boolean>(false)

  constructor(private http:HttpClient,private router:Router) { }

  login(email: string, password: string): Observable<string> {
    return this.http.post<string>(`${this.env}/api/login`, { email, password });
  }

  logout() {
    localStorage.removeItem('token');
    this.isLoggedInSubject.next(false);
    this.router.navigate(['/login']).then(() => {
      // Optionally, you can add code here to execute after navigation
      console.log('Successfully logged out and navigated to login page.');
    }).catch(error => {
      console.error('Navigation error:', error);
    });
  }


  isLoggedIn() {
    return this.isLoggedInSubject.asObservable();
  }

  getToken() {
    return localStorage.getItem('token');
  }


}
