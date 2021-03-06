import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppComponent} from '../app.component';
import {Ort} from '../_models/ort';
import {User} from '../_models/user';

/**
 * sends information about orte(locations) to backend
 */
@Injectable({
  providedIn: 'root'
})
// best names brought to you by team11
export class OrtService {

  static httpClient: HttpClient;


  constructor() {
  }

  static init(hC: HttpClient) {
    OrtService.httpClient = hC;
  }

  /**
   * posts a location
   */
  static Submit(ort: Ort): Observable<object> {
    return OrtService.httpClient.post(AppComponent.backendUrl + '/ort/' , ort.toSimplificationWithoutId());
  }

  /**
   * gets all locations
   */
  static getOrt(): Observable<object> {
    return OrtService.httpClient.get(AppComponent.backendUrl + '/ort/all');
  }

  /**
   * gets all locations which at least partially match 'value' in one of their parameters of type string
   */
  static getsearchresult(value: string): Observable<object> {
    value = value.length > 0 ? value : '*';
    // tslint:disable-next-line:max-line-length
    return OrtService.httpClient.get(AppComponent.backendUrl + '/ort/search/' + value);
  }

  /**
   * gets all locations posted by current user
   */
  static getOrtById(user: User): Observable<object> {
    return OrtService.httpClient.get(AppComponent.backendUrl + '/ort/id/' + user.id);
  }

  /**
   * deletes a post
   */
  static deletepost(ort: Ort, user: User): Observable<object> {
    return OrtService.httpClient.post(AppComponent.backendUrl + '/ort/delete/' + user.id, ort.toSimplification());
  }
}
