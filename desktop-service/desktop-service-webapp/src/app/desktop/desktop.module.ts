import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DesktopComponent} from './desktop/desktop.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {AppRoutingModule} from '../app-routing.module';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule, MatListModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatMenuModule,
    MatIconModule,
    MatListModule
  ],
  declarations: [
    DesktopComponent,
    NavbarComponent,
    SidebarComponent
  ],
  exports: [
    DesktopComponent
  ]
})
export class DesktopModule {
}
