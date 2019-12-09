import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppComponent} from '../app.component';
import {Event} from '../_models/event';

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
    return EventService.httpClient.post(AppComponent.backendUrl + '/event/' , event.toSimplification());
  }
  static getEvents(): Observable<object> {
    // tslint:disable-next-line:max-line-length
    return EventService.httpClient.get(AppComponent.backendUrl + '/event/all');
  }
  static getsearchresult(value: string): Observable<object> {
    // tslint:disable-next-line:max-line-length
    return EventService.httpClient.get(AppComponent.backendUrl + '/event/search/' + value);
  }
}
