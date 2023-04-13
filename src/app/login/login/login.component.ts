import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  

  user:any;
  loggedIn:any;
  constructor(private authService: SocialAuthService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user)
    });
  }

/*  public user: SocialUser = new SocialUser;
  constructor(private authService: SocialAuthService) {}
ngOnInit() {
   this.authService.authState.subscribe(user => {
   this.user = user;

   console.log(user);
 });
}
public signInWithGoogle(): void {
 this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
}
public signOut(): void {
 this.authService.signOut();
}*/
}
