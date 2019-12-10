import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {Ort} from '../../_models/ort';
import {OrtService} from '../../_services/ort.service';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-addort',
  templateUrl: './addort.component.html',
  styleUrls: ['./addort.component.scss'],
})

export class AddOrtComponent implements OnInit {

  ort = new Ort(-1, AppComponent.user.id.toString(), '', '', '', '', '', '', AppComponent.user.email, '');
  filecontent = '';

  constructor(
    public router: Router,
    public toastController: ToastController
  ) {
  }

  ngOnInit() {
  }

  /**
   * submits input to create new location
   */
  onSubmitDisplay() {
    // tslint:disable-next-line:max-line-length
    OrtService.Submit(this.ort).subscribe((instance: any) => {
        this.ort = Ort.fromSimplification(instance);
        this.openToast('Location post successful. Redirecting.');
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        this.openToast('Location post failed.');
      });
    console.log(this.ort);
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
   * for uploading pictures
   */
  uploadMethod(event) {

    console.log('changed image');

    if (event.target.files && event.target.files[0]) {

      const reader = new FileReader();

      console.log('is image');

      reader.readAsDataURL(event.target.files[0]); // read file as data url


      reader.onload = (res: any) => { // called once readAsDataURL is completed

        this.ort.image = res.target.result;

      };
    }
  }
}
