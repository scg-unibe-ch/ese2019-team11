import { Component, OnInit } from '@angular/core';
import {User} from '../../_models/user';
import {UpdateService} from '../../_services/update.service';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {LoginService} from '../../_services/login.service';
import {AppComponent} from '../../app.component';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  user = new User(-1, '', '', '');
  password: string;
  newpassword: string;
  newpasswordrepeat: string;

  constructor(
    public router: Router,
    public toastController: ToastController
  ) { }

  ngOnInit() {
    this.user = AppComponent.user;
  }

  onChangePassword() {
    if (this.newpassword === this.newpasswordrepeat) {
      LoginService.changepassword(this.password, this.newpassword, AppComponent.user).subscribe((instance: any) => {
          AppComponent.user = new User(instance.id, instance.name, instance.email, instance.password);
          this.openToast('Password udate successful.');
        },
        (error) => {
          this.openToast('Password update failed.');
          console.log(error);
        });
      console.log(this.user);
    }
  }


  onChange() {
    LoginService.updateUser(this.user).subscribe((instance: any) => {
      AppComponent.user = new User(instance.id, instance.name, instance.email, instance.password);
      this.openToast('Update successful');
    }, (error: any) => {
      this.openToast('Update failed');
    });
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

  onChangeemail() {

  }
}
