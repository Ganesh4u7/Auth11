import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';

import { AuthModule } from '../auth/auth.module';
import { AuthGuard} from '../auth/auth.guard';
import {LoginComponent} from '../auth/login/login.component';

const routes: Routes = [
    {path: 'auth', loadChildren: '../auth/auth.module#AuthModule'},
    {path: 'register', loadChildren: '../register/register.module#RegisterModule'},
    {path: '**', component: LoginComponent},
    // {path: 'editor', loadChildren: '../editor/editor.module#EditorModule'},

    {path: 'dashboard', redirectTo: 'auth/dashboard', canActivate:[AuthGuard]},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class LazyLoadModule { }
