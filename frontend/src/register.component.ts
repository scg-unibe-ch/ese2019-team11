import { Component, OnInit } from '@angular/core';
//import {LoginService} from "../_services/login.service";
import {User} from "../_models/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  user = new User(-1, '', '', '');

  constructor() { }

  ngOnInit() {}

  onRegisterDisplay() {
  }
}