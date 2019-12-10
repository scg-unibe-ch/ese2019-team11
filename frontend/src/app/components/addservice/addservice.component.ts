import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {Service} from '../../_models/service';
import {ServiceService} from '../../_services/service.service';
import {AppComponent} from "../../app.component";
@Component({
  selector: 'app-addservice',
  templateUrl: './addservice.component.html',
  styleUrls: ['./addservice.component.scss'],
})

export class AddServiceComponent implements OnInit {

  service = new Service(-1, AppComponent.user.id.toString(), '', '', '', '', '', '', AppComponent.user.email);
  filecontent = '';

  constructor(
    public router: Router,
    public toastController: ToastController
  ) {
  }

  ngOnInit() {
  }

  /**
   * submits input to create service
   */
  onSubmitDisplay() {
    // TO-DO: get userid from user not from input!!!!
    // tslint:disable-next-line:max-line-length
    ServiceService.Submit(this.service).subscribe((instance: any) => {
        this.service = Service.fromSimplification(instance);
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

        // this.resizeLogoAndSave(res.target.result);
        this.service.image = res.target.result;

      };
    }
  }
}

