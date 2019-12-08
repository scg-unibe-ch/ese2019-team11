import { Component, OnInit } from '@angular/core';
import {Service} from '../../_models/service';
import {ServiceService} from '../../_services/service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor() { }

  services: Service[];
  ngOnInit() {
    ServiceService.getServices().subscribe((instances: any) => {
      this.services = instances.map((instance) => Service.fromSimplification(instance));
      console.log(this.services);
   });
  }
}
