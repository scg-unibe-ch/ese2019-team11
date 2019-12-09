import { Component, OnInit } from '@angular/core';
import {Ort} from '../../_models/ort';
import {OrtService} from '../../_services/ort.service';
import {Router} from '@angular/router';
import {Event} from '../../_models/event';

@Component({
  selector: 'app-searchort',
  templateUrl: './searchort.page.html',
  styleUrls: ['./searchort.page.scss'],
})
export class SearchOrtPage implements OnInit {

  constructor(
    public router: Router
  ) { }

  search: string;
  orte: Ort[];

  ngOnInit() {
    OrtService.getOrt().subscribe((instances: any) => {
      this.orte = instances.map((instance) => Ort.fromSimplification(instance));
      console.log(this.orte);
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
    OrtService.getsearchresult(this.search).subscribe((instances: any) => {
      this.orte = instances.map((instance) => Event.fromSimplification(instance));
      console.log(this.orte);
    });
  }
}

