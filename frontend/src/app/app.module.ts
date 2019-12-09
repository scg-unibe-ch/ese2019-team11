import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component';
import {AddOrtComponent} from './components/addlocation/addort.component';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import {RegisterComponent} from './register/register.component';
import {AddEventComponent} from './components/addevent/addevent.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    routingComponents,
    RegisterComponent,
    AddEventComponent,
    AddOrtComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
