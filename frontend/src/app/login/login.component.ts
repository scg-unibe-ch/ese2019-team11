import { Component, OnInit } from '@angular/core';
import {LoginService} from "../_services/login.service";
import {User} from "../_models/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  user = new User(0, '', '', '');

  constructor() { }

  ngOnInit() {}

  onLoginDisplay() {
    LoginService.Login(this.user.email, this.user.password).subscribe((instance: any) => {
      this.user = new User(instance.id, instance.name, instance.email, instance.password);
    },
      (error) => {
      alert('not found');
    });
    console.log(this.user);
  }

  onRegisterDisplay() {
  }
}

