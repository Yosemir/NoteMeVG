import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, ViewChild } from '@angular/core';
import {  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListComponent } from 'src/app/list/list.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


  user: SocialUser | undefined;
  GoogleLoginProvider = GoogleLoginProvider;




  constructor(private _authService: SocialAuthService,
    private router: Router,
    private listar: ListComponent) { }

    emailUser?: string ;
    nombreUser?: string = 'Hola';

  ngOnInit() {
    this._authService.authState.subscribe((user) => {
      this.user = user;
      this.emailUser = user.email
      this.router.navigate(['/notas']);
    }, (error) => {
      console.error(error);
    });
  }



}
