import { Component, OnInit } from '@angular/core';
import {LoginService} from '../_services/login.service';
import {User} from '../_models/user';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  user = new User(-1, '', '', '');

  constructor(
    public router: Router,
    public toastController: ToastController
  ) { }

  ngOnInit() {}

  onLoginDisplay() {
    LoginService.Login(this.user.email.toLowerCase(), this.user.password).subscribe((instance: any) => {
      this.user = new User(instance.id, instance.name, instance.email, instance.password);
      this.openToast('Login successful. Redirecting.');
      this.router.navigate(['/dashboard']);
    },
      (error) => {
      this.openToast('Login failed.');
    });
    console.log(this.user);
  }

  onRegisterDisplay() {
    this.router.navigate(['/register']);
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

