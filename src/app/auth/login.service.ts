import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isLoggedin =false;

  constructor(
    private afAuth: AngularFireAuth
  ) { }

  login(){
    console.log('Redirecting to Google login provider...');
    this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider());

  }
   loginFB(){
     console.log('Redirecting to Facebook login provider...');
     this.afAuth.auth.signInWithRedirect(new auth.FacebookAuthProvider());
  }
  logout(){
    this.afAuth.auth.signOut();
  }
  getLoggedInUser(){
    console.log(this.afAuth.authState);
    return this.afAuth.authState;
  }


  setLoggedin(val: boolean){
    this.isLoggedin = val;
  }
  get isLoggedStatus(){
    return this.isLoggedin;
  }
}
