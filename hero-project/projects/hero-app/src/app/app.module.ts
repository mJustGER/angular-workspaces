import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatureAModule } from '@libs/shared/src/lib/feature-a';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatureAModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
