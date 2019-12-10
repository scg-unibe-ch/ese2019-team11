import { Component, OnInit } from '@angular/core';
import {EventService} from '../../_services/event.service';
import {Event} from '../../_models/event';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {AppComponent} from '../../app.component';


@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.scss'],
})

export class AddEventComponent implements OnInit {

  event = new Event(-1, AppComponent.user.id.toString(), '', '', '', '', '', AppComponent.user.email, '');

  constructor(
    public router: Router,
    public toastController: ToastController
  ) {
  }

  ngOnInit() {
  }

  /**
   * submits input to create a new event
   */
  onSubmitDisplay() {
    EventService.Submit(this.event).subscribe(async (instance: any) => {
        this.event = Event.fromSimplification(instance);
        await this.openToast('Service post successful. Redirecting.');
        this.router.navigate(['/dashboard/profile']);
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

  /**
   * for uploading images
   */
  uploadMethod(event) {

    console.log('changed image');

    if (event.target.files && event.target.files[0]) {

      const reader = new FileReader();

      console.log('is image');

      reader.readAsDataURL(event.target.files[0]); // read file as data url


      reader.onload = (res: any) => { // called once readAsDataURL is completed

        this.event.image = res.target.result;

      };
    }
  }
}
