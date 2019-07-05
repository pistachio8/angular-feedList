import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { CoreModule } from './core/core.module';
import { SharedModule, HeaderComponent, FooterComponent } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
