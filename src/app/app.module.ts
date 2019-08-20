import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SangwonComponent } from './sangwon/sangwon.component';
import { JaehyungComponent } from './jaehyung/jaehyung.component';
import { JinbeomComponent } from './jinbeom/jinbeom.component';

@NgModule({
  declarations: [
    AppComponent,
    SangwonComponent,
    JaehyungComponent,
    JinbeomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
