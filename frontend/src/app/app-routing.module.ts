import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {AddEventComponent} from './components/addevent/addevent.component';
import {AddServiceComponent} from './components/addservice/addservice.component';
import {AddOrtComponent} from './components/addlocation/addort.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'addevent', component: AddEventComponent},
  {path: 'addservice', component: AddServiceComponent},
  {path: 'addort', component: AddOrtComponent},
  {path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardPageModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

// tslint:disable-next-line:max-line-length
export const routingComponents = [LoginComponent, AddEventComponent, AddServiceComponent, RegisterComponent, WelcomeComponent, AddOrtComponent];

/*
to add a component to the routing:
-import the component
-add a path
-add the component to the routingComponents Array
 */
