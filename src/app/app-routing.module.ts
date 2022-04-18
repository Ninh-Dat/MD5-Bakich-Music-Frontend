import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './page/login/login.component';
import {RegisterComponent} from './page/register/register.component';
import {MasterComponent} from './crud/master/master.component';
import {UserDetailComponent} from './crud/user-detail/user-detail.component';
import {UserEditComponent} from './crud/user-edit/user-edit.component';
import {SingerListComponent} from './crud/singer/singer-list/singer-list.component';
import {NavComponent} from './crud/nav/nav.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path:'master',
    component: MasterComponent,
  },
  {
    path: 'users/:id/detail',
    component: UserDetailComponent,
  },
  {
    path: 'users/:id/update',
    component: UserEditComponent,
  },
  {
    path: 'singers',
    component: SingerListComponent,
  },

  // {
  //   path: 'nav',
  //   component: NavComponent
  // }

  // {
  //   path: 'nav',
  //   component: NavComponent,
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
