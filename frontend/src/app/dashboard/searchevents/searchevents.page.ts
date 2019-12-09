import { Component, OnInit } from '@angular/core';
import {Event} from '../../_models/event';
import {EventService} from '../../_services/event.service';
import {Router} from '@angular/router';
import {ServiceService} from "../../_services/service.service";
import {Service} from "../../_models/service";

@Component({
  selector: 'app-searchevents',
  templateUrl: './searchevents.page.html',
  styleUrls: ['./searchevents.page.scss'],
})
export class SearchEventsPage implements OnInit {

  constructor(
    public router: Router
  ) { }

  events: Event[];
  search: string;
  ngOnInit() {
    EventService.getEvents().subscribe((instances: any) => {
      this.events = instances.map((instance) => Event.fromSimplification(instance));
      console.log(this.events);
    });
  }
  showOrtForm() {
    this.router.navigate(['/dashboard/searchort']);
  }

  showEventForm() {
    this.router.navigate(['/dashboard/searchevents']);
  }

  showServiceForm() {
    this.router.navigate(['/dashboard/search']);
  }

  searchvalue() {
    EventService.getsearchresult(this.search).subscribe((instances: any) => {
      this.events = instances.map((instance) => Event.fromSimplification(instance));
      console.log(this.events);
    });
  }
}

