import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadBarComponent } from './components/head-bar/head-bar.component';
import { HomeComponent } from './components/home-component/home-component.component';
import { RegistComponent } from './components/regist/regist.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule }   from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageModule } from 'primeng/message';
import { HttpClientModule } from '@angular/common/http';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {SidebarModule} from 'primeng/sidebar';
import {SelectButtonModule} from 'primeng/selectbutton';

@NgModule({
  declarations: [
    AppComponent,
    HeadBarComponent,
    HomeComponent,
    RegistComponent,
    DashbordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordModule,
    BrowserAnimationsModule,
    MessageModule,
    HttpClientModule,
    OverlayPanelModule,
    SidebarModule,
    SelectButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
