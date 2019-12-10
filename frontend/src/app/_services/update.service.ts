import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppComponent} from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  static httpClient: HttpClient;

  constructor(){}

  init(http: HttpClient) {
    UpdateService.httpClient = http;
  }

  static init(hC: HttpClient) {
    UpdateService.httpClient = hC;
  }

  static Get(email: string): Observable<object> {
    return UpdateService.httpClient.get(AppComponent.backendUrl + '/update/' + email, null);
  }

  static Put(email: string, password: string): Observable<object> {
    return UpdateService.httpClient.put(AppComponent.backendUrl + '/update/' + email + '/' + password, null);
  }

}
