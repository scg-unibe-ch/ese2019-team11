import { Component, OnInit } from '@angular/core';
import {EventService} from '../../_services/event.service';
import {Event} from '../../_models/event';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {Service} from '../../_models/service';
@Component({
  selector: 'app-addservice',
  templateUrl: './addservice.component.html',
  styleUrls: ['./addservice.component.scss'],
})

export class AddServiceComponent implements OnInit {

  service = new Service(-1, '', '');

  constructor(
    public router: Router,
    public toastController: ToastController
  ) { }

  ngOnInit() {}

  onSubmitDisplay() {
    EventService.Submit(this.service.name, this.service.description).subscribe((instance: any) => {
        this.service = new Service(instance.id, instance.name, instance.description);
        this.openToast('Service post successful. Redirecting.');
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        this.openToast('Service post failed.');
      });
    console.log(this.service);
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

