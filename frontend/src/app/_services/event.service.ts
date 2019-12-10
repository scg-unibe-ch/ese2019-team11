import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppComponent} from '../app.component';
import {Event} from '../_models/event';
import {User} from '../_models/user';


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

  static Submit(event: Event): Observable<object> {
    // tslint:disable-next-line:max-line-length
    return EventService.httpClient.post(AppComponent.backendUrl + '/event/' , event.toSimplificationWithoutId());
  }
  static getEvents(): Observable<object> {
    // tslint:disable-next-line:max-line-length
    return EventService.httpClient.get(AppComponent.backendUrl + '/event/all');
  }
  static getsearchresult(value: string): Observable<object> {
    value = value.length > 0 ? value : '*';
    // tslint:disable-next-line:max-line-length
    return EventService.httpClient.get(AppComponent.backendUrl + '/event/search/' + value);
  }
  static getEventsById(user: User): Observable<object> {
    return EventService.httpClient.get(AppComponent.backendUrl + '/event/id/' + user.id);
  }

  static deletepost(event: Event, user: User): Observable<object> {
    return EventService.httpClient.post(AppComponent.backendUrl + '/event/delete/' + user.id, event.toSimplification());
  }
}
