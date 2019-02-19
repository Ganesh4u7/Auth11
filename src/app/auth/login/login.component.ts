import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
user: firebase.User;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: LoginService
  ) {

  }

  ngOnInit() {

    this.service.getLoggedInUser()
      .subscribe(user => {
        if (user) {

         console.log(user);
         this.user = user;

         if(this.user.emailVerified == true) {

           this.router.navigate(['auth/dashboard']);
           this.service.setLoggedin(true);
         }
      }
      })
  }
 loginGoogle(){
    console.log('Login..');
    this.service.login();


 }
 loginFB(){
    console.log("Login..");
    this.service.loginFB();
 }
 logout(){
    this.service.logout();
 }
}
