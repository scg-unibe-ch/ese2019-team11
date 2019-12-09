import {Component, OnInit} from '@angular/core';
import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {HttpClient} from '@angular/common/http';
import {LoginService} from './_services/login.service';
import {RegisterService} from './_services/register.service';
import {EventService} from './_services/event.service';
import {ServiceService} from './_services/service.service';
import {OrtService} from './_services/ort.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent implements OnInit {
  static backendUrl = 'http://localhost:3000';

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private httpClient: HttpClient
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    LoginService.init(this.httpClient);
    RegisterService.init(this.httpClient);
    EventService.init(this.httpClient);
    ServiceService.init(this.httpClient);
    OrtService.init(this.httpClient);
  }
}

