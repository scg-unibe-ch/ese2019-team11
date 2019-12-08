import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppComponent} from '../app.component';

@Injectable({
  providedIn: 'root'
})
// best names brought to you by team11
export class ServiceService {

  static httpClient: HttpClient;


  constructor() {
  }

  static init(hC: HttpClient) {
    ServiceService.httpClient = hC;
  }

  static Submit(userid: string, title: string, description: string, typ: string): Observable<object> {
    // tslint:disable-next-line:max-line-length
    return ServiceService.httpClient.post(AppComponent.backendUrl + '/service/' + title + '/' + description + '/' + typ + '/' + userid, null);
  }

}
