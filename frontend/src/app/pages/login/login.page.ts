import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { LoginService } from "../../_services/login.service";
import {User} from "../../_models/user"; 

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = new User(-1, '', '', '');

  constructor(private router: Router) { }

  ngOnInit() {
  }

  //Use Backend to login with Token
  login() {
  LoginService.Login(this.user.email, this.user.password).subscribe((instance: any) => {
    this.user = new User(instance.id, instance.name, instance.email, instance.password);
    //alert can be removed later
    alert('got in');
    this.router.navigate(['/home/feed']);
  },
    (error) => {
    alert('e-mail or password is wrong');
  });
  console.log(this.user);
  
  }
}
