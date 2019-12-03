import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {AddEventComponent} from './addevent.component';

@NgModule({
  imports:[CommonModule, IonicModule],
  declarations: [AddEventComponent],
  entryComponents:[AddEventComponent],
  exports:[AddEventComponent]
})

export class AddEventComponentModule {}
