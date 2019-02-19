import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LazyLoadModule } from './lazy-load/lazy-load.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import {AngularFireModule} from '@angular/fire';
import { AngularFireAuthModule} from '@angular/fire/auth';
import {LoginComponent} from './auth/login/login.component';

import {environment} from '../environments/environment';
import {AuthGuard} from './auth/auth.guard';

export const firebaseConfig = {
  apiKey: "AIzaSyA0-qXDC2iVfitEiAD_EonyXektpDRVkFk",
  authDomain: "fir-auth-7b5d8.firebaseapp.com",
  databaseURL: "https://fir-auth-7b5d8.firebaseio.com",
  projectId: "fir-auth-7b5d8",
  storageBucket: "fir-auth-7b5d8.appspot.com",
  messagingSenderId: "404412576606"
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    LazyLoadModule,
    CoreModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
