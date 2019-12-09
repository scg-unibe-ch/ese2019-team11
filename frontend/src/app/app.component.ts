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
import {User} from './_models/user';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent implements OnInit {
  static backendUrl = 'http://localhost:3000';
  static user: User;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private httpClient: HttpClient,
    public router: Router
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
    this.router.navigate(['/login']);
  }
}

