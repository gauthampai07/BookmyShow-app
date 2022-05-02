import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './Component/toolbar/toolbar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule } from '@angular/material/slider';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ToolbarRowComponent } from './Component/toolbar-row/toolbar-row.component';
import { ImageSliderComponent } from './Component/image-slider/image-slider.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ToolbarRowComponent,
    ImageSliderComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatToolbarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
