import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddServiceComponent } from '../../components/addservice/addservice.component';
import { AddEventComponent } from '../../components/addevent/addevent.component';
import {AddOrtComponent} from '../../components/addlocation/addort.component';
import {ServiceService} from '../../_services/service.service';
import {Service} from '../../_models/service';
import {AppComponent} from '../../app.component';
import {EventService} from '../../_services/event.service';
import {Event} from '../../_models/event';
import {OrtService} from '../../_services/ort.service';
import {Ort} from '../../_models/ort';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  services: Service[];
  events: Event[];
  orte: Ort[];
  search: string;

  constructor(private modalCtrl: ModalController) {
  }

  /**
   * opens addservice form
   */
  async showServiceForm() {
    const modal = await this.modalCtrl.create({
      component: AddServiceComponent
    });
    await modal.present();
  }

  /**
   * opens addlocation form
   */
  async showOrtForm() {
    const modal = await this.modalCtrl.create({
      component: AddOrtComponent
    });
    await modal.present();
  }

  /**
   * opens addevent form
   */
  async showEventForm() {
    const modal = await this.modalCtrl.create({
      component: AddEventComponent
    });
    await modal.present();
  }

  /**
   * gets all posts previously made by current user
   */
  ngOnInit() {
    ServiceService.getServicesById(AppComponent.user).subscribe((instances: any) => {
      this.services = instances.map((instance) => Service.fromSimplification(instance));
      console.log(this.services);
    });
    EventService.getEventsById(AppComponent.user).subscribe((instances: any) => {
      this.events = instances.map((instance) => Event.fromSimplification(instance));
      console.log(this.events);
    });
    OrtService.getOrtById(AppComponent.user).subscribe((instances: any) => {
      this.orte = instances.map((instance) => Ort.fromSimplification(instance));
      console.log(this.orte);
    });
  }

  segmentChanged($event: CustomEvent) {

  }

  /**
   * deletes a service
   */
  deleteservice(service: Service) {
    console.log(AppComponent.user);
    ServiceService.deletepost(service, AppComponent.user).subscribe((instances: any) => {
      this.services = instances.map((instance) => Service.fromSimplification(instance));
      console.log(this.services);
    });
  }

  /**
   * deletes an event
   */
  deleteevent(event: Event) {
    console.log(AppComponent.user);
    EventService.deletepost(event, AppComponent.user).subscribe((instances: any) => {
      this.events = instances.map((instance) => Event.fromSimplification(instance));
      console.log(this.events);
    });
  }

  /**
   * deletes a location
   */
  deleteort(ort: Ort) {
    console.log(AppComponent.user);
    OrtService.deletepost(ort, AppComponent.user).subscribe((instances: any) => {
      this.orte = instances.map((instance) => Ort.fromSimplification(instance));
      console.log(this.orte);
    });
  }
}

