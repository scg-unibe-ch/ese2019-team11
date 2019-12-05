import { Component, OnInit } from '@angular/core';
import {LoginService} from '../_services/login.service';
import {User} from '../_models/user';
import {RegisterService} from '../_services/register.service';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  user = new User(-1, '', '', '');

  constructor(
    public router: Router,
    public toastController: ToastController
  ) { }

  ngOnInit() {}

  onRegisterDisplay() {
    RegisterService.Register(this.user.email.toLowerCase(), this.user.password, this.user.name).subscribe((instance: any) => {
        this.user = new User(instance.id, instance.name, instance.email, instance.password);
        this.openToast('Registration successful. Redirecting to login page.');
        this.router.navigate(['/login']);
      },
      (error) => {
        this.openToast('Registration failed.');
        console.log(error);
      });
    console.log(this.user);
  }

  onLoginDisplay(){
    this.router.navigate(['/login']);
  }

  async openToast(output) {
    const toast = await this.toastController.create({
      message: output,
      duration: 4000,
      position: 'top',
      showCloseButton: true,
      color: 'light',
    });
    toast.present();
  }
}

