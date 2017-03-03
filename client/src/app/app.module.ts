import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { APP_CONSTANTS, AppConstants } from './app.constants';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { AppComponent } from './app.component';
import {TopBarComponent} from './components/top-bar/top-bar';
import {HomeComponent} from './components/home/home';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import {LandingPageComponent} from  './components/landing-page/landing-page';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent }
    ]),
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot()
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    LandingPageComponent
  ],
  providers: [
    { provide: APP_CONSTANTS, useValue: AppConstants }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
