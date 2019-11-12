import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'app-login', pathMatch: 'full'},
    {path: 'login', loadChildren: './login/login.component#LoginModule'},
    {path: 'register', loadChildren: './register/register.component#RegisterModule'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{};