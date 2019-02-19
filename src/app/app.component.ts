import { Component,OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
} from '@angular/animations';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],


})
export class AppComponent implements OnInit{

  user: firebase.User;

  constructor( private afAuth : AngularFireAuth){}
  title = 'app';
  getRouteAnimation(outlet) {

      return outlet.activatedRouteData.animation
  }

  ngOnInit(){
  this.afAuth.authState
    .subscribe(user =>{
      console.log(user);

      this.user = user;
    })
  }
}

