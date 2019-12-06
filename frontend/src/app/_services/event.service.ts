import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppComponent} from '../app.component';
import {RegisterService} from './register.service';
import {LoginService} from './login.service';
import {User} from '../_models/user';
import {ServiceService} from './service.service';

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

  static Submit(userid: string, title: string, description: string): Observable<object> {
    return EventService.httpClient.post(AppComponent.backendUrl + '/event/' + title + '/' + description + '/' + userid, null);
  }

}
