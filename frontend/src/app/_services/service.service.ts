import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppComponent} from '../app.component';
import {Service} from '../_models/service';
import {User} from '../_models/user';

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

  /**
   * posts a new service
   */
  static Submit(service: Service): Observable<object> {
    // tslint:disable-next-line:max-line-length
    return ServiceService.httpClient.post(AppComponent.backendUrl + '/service/' , service.toSimplificationWithoutId());
  }

  /**
   * gets all services
   */
  static getServices(): Observable<object> {
    // tslint:disable-next-line:max-line-length
    return ServiceService.httpClient.get(AppComponent.backendUrl + '/service/all');
  }

  /**
   * gets all services which at least partially match 'value' in one of their parameters of type string
   */
  static getsearchresult(value: string): Observable<object> {
    // tslint:disable-next-line:max-line-length
    value = value.length > 0 ? value : '*';
    return ServiceService.httpClient.get(AppComponent.backendUrl + '/service/search/' + value);
  }

  /**
   * deletes a service
   */
  static deletepost(service: Service, user: User): Observable<object> {
    return ServiceService.httpClient.post(AppComponent.backendUrl + '/service/delete/' + user.id, service.toSimplification());
  }

  /**
   * gets all services posted by current user
   */
  static getServicesById(user: User): Observable<object> {
    return ServiceService.httpClient.get(AppComponent.backendUrl + '/service/id/' + user.id);
  }
}
