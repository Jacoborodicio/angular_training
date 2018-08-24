import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { ReactiveProgramingComponent } from './reactive-programing/reactive-programing.component';
import { AsyncPipesDemoComponent } from './async-pipes-demo/async-pipes-demo.component';
import { HttpClientModule } from '@angular/common/http';
import { ZonesComponent } from './zones/zones.component';
import { HttpDemoComponent } from './http-demo/http-demo.component';
import { BookOflineComponent } from './book-ofline/book-ofline.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveProgramingComponent,
    AsyncPipesDemoComponent,
    ZonesComponent,
    HttpDemoComponent,
    BookOflineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
