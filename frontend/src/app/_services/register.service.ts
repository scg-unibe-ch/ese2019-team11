import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppComponent} from '../app.component';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  static httpClient: HttpClient;

  constructor() {
  }

  static init(hC: HttpClient) {
    RegisterService.httpClient = hC;
  }
  
  static Register(email: string, password: string): Observable<object> {
    return RegisterService.httpClient.post(AppComponent.backendUrl + '/login/' + email + '/' + password, null);
  }
}