import { Component, OnInit } from '@angular/core';
import {Service} from '../../_models/service';
import {ServiceService} from '../../_services/service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor(
    public router: Router
  ) { }
  search: string;
  services: Service[];
  ngOnInit() {
    ServiceService.getServices().subscribe((instances: any) => {
      this.services = instances.map((instance) => Service.fromSimplification(instance));
      console.log(this.services);
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
    ServiceService.getsearchresult(this.search).subscribe((instances: any) => {
      this.services = instances.map((instance) => Service.fromSimplification(instance));
      console.log(this.services);
    });
  }
}
