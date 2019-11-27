import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppComponent} from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  static httpClient: HttpClient;


  constructor() {
  }

  static init(hC: HttpClient) {
    LoginService.httpClient = hC;
  }

  static Login(email: string, password: string): Observable<object> {
    return LoginService.httpClient.post(AppComponent.backendUrl + '/login/' + email + '/' + password, null);
  }

}

