import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppComponent} from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor() {}

  static httpClient: HttpClient;

  static init(hC: HttpClient) {
    RegisterService.httpClient = hC;
  }

  static Register(email: string, password: string, name: string): Observable<object> {
    return RegisterService.httpClient.post(AppComponent.backendUrl + '/register/' + email + '/' + password + '/' + name, null);
  }

  init(http: HttpClient) {
    RegisterService.httpClient = http;
  }

}
