import {Component, OnInit} from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClient} from '@angular/common/http';
import { LoginService } from './_services/login.service';
import { Login } from './login';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent implements OnInit {
  static backendUrl = 'http://localhost:3000';
  login: Login = new Login(null, '');
  logins: Login[] = [];

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
    this.httpClient.get('http://localhost:3000/login').subscribe((instances: any) => {
      this.logins = instances.map((instance) => new Login(instance.id, instance.name));
    });
  }

  onLogin() {
    this.httpClient.post('http://localhost:3000/login', {
      name: this.login.name
    }).subscribe((instance: any) => {
      this.login.id = instance.id;
      this.logins.push(this.login);
      this.login = new Login(null, '');
    });
  }

  onLogoff(login: Login) {
    this.logins.splice(this.logins.indexOf(login), 1);
  }

}
