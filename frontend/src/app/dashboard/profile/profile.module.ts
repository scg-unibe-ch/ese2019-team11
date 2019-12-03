import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProfilePage } from './profile.page';
import { AddServiceComponentModule } from '../../components/addservice/addservice.module';
import { AddEventComponentModule } from 'src/app/components/addevent/addevent.module';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    AddServiceComponentModule,
    AddEventComponentModule,
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
