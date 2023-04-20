import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login/login.component';


@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'notas', component: ListComponent },
    { path: 'login', component: LoginComponent }

  ]),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
