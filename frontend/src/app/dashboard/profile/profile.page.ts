import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddServiceComponent } from '../../components/addservice/addservice.component';
import { AddEventComponent } from '../../components/addevent/addevent.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  async showServiceForm() {
    const modal = await this.modalCtrl.create({
      component: AddServiceComponent
    });
    await modal.present();
  }

  async showEventForm() {
    const modal = await this.modalCtrl.create({
      component: AddEventComponent
    });
    await modal.present();
  }
  ngOnInit() {
  }

}
