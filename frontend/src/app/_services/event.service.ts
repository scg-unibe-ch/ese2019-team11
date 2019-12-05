import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppComponent} from '../app.component';

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

  static Submit(name: string, description: string): Observable<object> {
    return EventService.httpClient.post(AppComponent.backendUrl + '/addevent/' + name + '/' + description, null);
  }

}
