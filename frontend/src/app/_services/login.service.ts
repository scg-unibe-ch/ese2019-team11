import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppComponent} from '../app.component';
import {User} from '../_models/user';

/**
 * sends information about login and users to backend
 */
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

  /**
   * logs user in
   */
  static Login(email: string, password: string): Observable<object> {
    return LoginService.httpClient.post(AppComponent.backendUrl + '/login/' + email + '/' + password, null);
  }

  /**
   * changes current users username and/or email
   */
  static updateUser(user: User): Observable<object> {
    return LoginService.httpClient.put(AppComponent.backendUrl + '/login/updateUser/' , user);
  }

  /**
   * changes current users password
   */
  static changepassword(oldpassword: string, newpassword: string, user: User): Observable<object> {
    // tslint:disable-next-line:max-line-length
    return LoginService.httpClient.put(AppComponent.backendUrl + '/login/changepassword/' + newpassword + '/' + oldpassword + '/' + user.id, null);
}
}

