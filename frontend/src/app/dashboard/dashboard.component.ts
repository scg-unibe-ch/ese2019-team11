import { Component, OnInit } from '@angular/core';
//import {LoginService} from "../_services/login.service";
//import {User} from "../_models/user";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

//  user = new User(-1, '', '', '');

  constructor() { }

  ngOnInit() {}

  onGotoLogin() {

  }

  onGotoRegister() {

  }

  onGotoDashboard() {

  }

/*  onLoginDisplay() {
    LoginService.Login(this.user.email, this.user.password).subscribe((instance: any) => {
      this.user = new User(instance.id, instance.name, instance.email, instance.password);
      alert('got in');
    },
      (error) => {
      alert('not found');
    });
    console.log(this.user);
  }

  onRegisterDisplay() {
  }
*/
}

