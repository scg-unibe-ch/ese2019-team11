import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User} from "../../_models/user"; 
import {RegisterService} from "../../_services/register.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private router: Router) { }

  user = new User(-1, '', '', '');

  ngOnInit() {
  }
    
  //Store data in backend
  register() {

    RegisterService.Register(this.user.email, this.user.password).subscribe((instance: any) => {
      this.user = new User(instance.id, instance.name, instance.email, instance.password);
      this.router.navigate(['/home/feed']);
    },
      (error) => {
      alert('e-mail already exists');
    });
    console.log(this.user);

    this.router.navigate(['/home/feed']);
  }
}
