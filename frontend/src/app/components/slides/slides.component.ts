import {Component, OnInit} from '@angular/core';
import {ViewChild} from '@angular/core';
import {IonSlides} from '@ionic/angular';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
})
export class SlidesComponent implements OnInit {

  @ViewChild('slides', {static: false}) slides: IonSlides;



  slideOpts = {initialSlide: 0, speed: 400};

  prev() {
    this.slides.slidePrev();
  }

  next() {
    this.slides.slideNext();
  }

  constructor() {
  }

  ngOnInit() {
  }

}
