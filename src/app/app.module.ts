import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusListComponent } from './components/bus-list/bus-list.component';
import { BusStopListComponent } from './components/bus-stop-list/bus-stop-list.component';
import { BusDetailComponent } from './components/bus-detail/bus-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BusListComponent,
    BusStopListComponent,
    BusDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
