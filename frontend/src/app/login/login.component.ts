import { Component, OnInit } from '@angular/core';
import {LoginService} from '../_services/login.service';
import {User} from '../_models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  user = new User(-1, '', '', '');

  constructor(public router: Router) { }

  ngOnInit() {}

  onLoginDisplay() {
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
    this.router.navigate(['/register']);
  }
}

