import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppComponent} from '../app.component';
import {Event} from '../_models/event';
import {User} from '../_models/user';

/**
 * sends information about events to backend
 */

@Injectable({
  providedIn: 'root'
})
export class EventService {

  static httpClient: HttpClient;


  constructor() {
  }

  static init(hC: HttpClient) {
    EventService.httpClient = hC;
  }

  /**
   * posts a new Event
   */
  static Submit(event: Event): Observable<object> {
    // tslint:disable-next-line:max-line-length
    return EventService.httpClient.post(AppComponent.backendUrl + '/event/' , event.toSimplificationWithoutId());
  }

  /**
   * gets all events
   */
  static getEvents(): Observable<object> {
    // tslint:disable-next-line:max-line-length
    return EventService.httpClient.get(AppComponent.backendUrl + '/event/all');
  }

  /**
   * gets all events which at least partially match 'value' in one of their parameters of type string
   */
  static getsearchresult(value: string): Observable<object> {
    value = value.length > 0 ? value : '*';
    return EventService.httpClient.get(AppComponent.backendUrl + '/event/search/' + value);
  }

  /**
   * gets Events which have been posted by current user
   */
  static getEventsById(user: User): Observable<object> {
    return EventService.httpClient.get(AppComponent.backendUrl + '/event/id/' + user.id);
  }

  /**
   * deletes an event
   */
  static deletepost(event: Event, user: User): Observable<object> {
    return EventService.httpClient.post(AppComponent.backendUrl + '/event/delete/' + user.id, event.toSimplification());
  }
}
