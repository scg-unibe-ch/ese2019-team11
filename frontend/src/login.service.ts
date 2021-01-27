import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppComponent} from '../app.component';
//import { BehaviorSubject } from 'rxjs'; 

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  static httpClient: HttpClient;

//  authenticationState = new BehaviorSubject(false);

  constructor() {
  }

  static init(hC: HttpClient) {
    LoginService.httpClient = hC;
  }
  
  static Login(email: string, password: string): Observable<object> {
    return LoginService.httpClient.post(AppComponent.backendUrl + '/login/' + email + '/' + password, TOKEN_KEY);
  }
/*
  static logout(){

  }

  isAuthenticated(){

  }

  checkToken(){

  }
*/
}

