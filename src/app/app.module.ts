import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { MasterComponent } from './crud/master/master.component';
import { NavComponent } from './crud/nav/nav.component';
import { UserDetailComponent } from './crud/user-detail/user-detail.component';
import { UserEditComponent } from './crud/user-edit/user-edit.component';
import { SingerListComponent } from './crud/singer/singer-list/singer-list.component';
import { SongListComponent } from './crud/song/song-list/song-list.component';
import { SongDetailComponent } from './crud/song/song-detail/song-detail.component';
import { SingerDetailComponent } from './crud/singer/singer-detail/singer-detail.component';
import {NgxAudioPlayerModule} from 'ngx-audio-player';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FooterComponent } from './crud/footer/footer.component';
import {CategoryListComponent} from './crud/category/category-list/category-list.component';
import { CategoryDetailComponent } from './crud/category/category-detail/category-detail.component';
import { SingerCreateComponent } from './crud/singer-create/singer-create.component';

import { AdminComponent } from './admin/admin.component';
import { UserListComponent } from './admin/user-list/user-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    MasterComponent,
    NavComponent,
    UserDetailComponent,
    UserEditComponent,
    SingerListComponent,
    SongListComponent,
    SongDetailComponent,
    SingerDetailComponent,

    FooterComponent,
    CategoryListComponent,
    CategoryDetailComponent,
    SingerCreateComponent,

    AdminComponent,
    UserListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,

    BrowserAnimationsModule,
    NgxAudioPlayerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
