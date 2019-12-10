import { Component, OnInit } from '@angular/core';
import {User} from '../../_models/user';
import {UpdateService} from '../../_services/update.service';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  user = new User(-1, '', '', '');

  constructor(
    public router: Router,
    public toastController: ToastController
  ) { }

  ngOnInit() {
  }

  onChangePassword(){
    UpdateService.Get(this.user.email).subscribe((instance: any) => {
      this.user = new User(instance.id, instance.name, instance.email, instance.password);
    },
      (error) => {
        this.openToast('Password update failed.');
        console.log(error);
    });
    UpdateService.Put(this.user.email, this.user.password).subscribe((instance: any) => {
      this.user = new User(instance.id, instance.name, instance.email, instance.password);
      this.openToast('Password udate successful.');
    },
    (error) => {
      this.openToast('Password update failed.');
      console.log(error);
    });
    console.log(this.user);
  }

  onChangeName(){

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
