import { Component, OnInit } from '@angular/core';
import {EventService} from '../../_services/event.service';
import {Event} from '../../_models/event';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {User} from '../../_models/user';

@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.scss'],
})

export class AddEventComponent implements OnInit {

  event = new Event(-1, '', '', '');

  constructor(
    public router: Router,
    public toastController: ToastController
  ) { }

  ngOnInit() {}

  onSubmitDisplay() {
    EventService.Submit( this.event.userid, this.event.title, this.event.description).subscribe((instance: any) => {
        this.event = new Event(instance.id, instance.userid, instance.name, instance.description);
        this.openToast('Event post successful. Redirecting.');
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        this.openToast('Event post failed.');
      });
    console.log(this.event);
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

