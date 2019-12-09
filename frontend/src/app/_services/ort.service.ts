import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppComponent} from '../app.component';
import {Ort} from '../_models/ort';

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

  static Submit(ort: Ort): Observable<object> {
    // tslint:disable-next-line:max-line-length
    return OrtService.httpClient.post(AppComponent.backendUrl + '/ort/' , ort.toSimplification());
  }
  static getOrt(): Observable<object> {
    // tslint:disable-next-line:max-line-length
    return OrtService.httpClient.get(AppComponent.backendUrl + '/ort/all');
  }
  static getsearchresult(value: string): Observable<object> {
    // tslint:disable-next-line:max-line-length
    return OrtService.httpClient.get(AppComponent.backendUrl + '/ort/search/' + value);
  }
}
