import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './page/login/login.component';
import {RegisterComponent} from './page/register/register.component';
import {MasterComponent} from './crud/master/master.component';
import {UserDetailComponent} from './crud/user-detail/user-detail.component';
import {UserEditComponent} from './crud/user-edit/user-edit.component';
import {SongListComponent} from './crud/song/song-list/song-list.component';
import {SongDetailComponent} from './crud/song/song-detail/song-detail.component';
import {SingerListComponent} from './crud/singer/singer-list/singer-list.component';
import {SingerDetailComponent} from './crud/singer/singer-detail/singer-detail.component';

import {CategoryListComponent} from './crud/category/category-list/category-list.component';
import {CategoryDetailComponent} from './crud/category/category-detail/category-detail.component';
import {SingerCreateComponent} from './crud/singer-create/singer-create.component';

import {AdminComponent} from "./admin/admin.component";
import {UserListComponent} from "./admin/user-list/user-list.component";


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
  {
    path: 'singers/:id/detail',
    component: SingerDetailComponent,
  },
  {
    path: 'songs',
    component: SongListComponent,
  },
  {
    path: 'songs/:id/detail',
    component: SongDetailComponent,
  },

  {
    path: 'categories',
    component: CategoryListComponent,
  },
  {
    path: 'categories/:id/detail',
    component: CategoryDetailComponent
  },
  {
    path: 'singers/create',
    component: SingerCreateComponent,
  },


  {
    path: 'admin',
    component: AdminComponent,
  },

  {
    path: 'user-list',
    component: UserListComponent,
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
