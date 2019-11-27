import { Component, OnInit } from '@angular/core';
import {LoginService} from '../_services/login.service';
import {User} from '../_models/user';
import {RegisterService} from '../_services/register.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  user = new User(-1, '', '', '');

  constructor(public router: Router) { }

  ngOnInit() {}

  // Change this for registration
  onRegisterDisplay() {
    RegisterService.Register(this.user.email, this.user.password, this.user.name).subscribe((instance: any) => {
        this.user = new User(instance.id, instance.name, instance.email, instance.password);
        alert('got in');
      },
      (error) => {
        alert('not found' + error);
        console.log(error);
      });
    console.log(this.user);
  }

  onLoginDisplay(){
    this.router.navigate(['/login']);
  }
}

