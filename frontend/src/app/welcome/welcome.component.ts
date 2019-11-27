import { Component, OnInit } from '@angular/core';
import {ViewChild} from '@angular/core';
import {IonSlides} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  slideOpts = {initialSlide: 0, speed: 400};

  @ViewChild('slides', {static: false}) slides: IonSlides;
  constructor(public router: Router) { }

  ngOnInit() {}
  prev() {
    this.slides.slidePrev();
  }

  next() {
    this.slides.slideNext();
  }

  gotologin() {
    this.router.navigate(['/login']);
  }
}
