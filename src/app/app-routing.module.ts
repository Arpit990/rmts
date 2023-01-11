import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusDetailComponent } from './components/bus-detail/bus-detail.component';
import { BusListComponent } from './components/bus-list/bus-list.component';
import { BusLocationComponent } from './components/bus-location/bus-location.component';
import { BusStopListComponent } from './components/bus-stop-list/bus-stop-list.component';
import { BusStopTimeComponent } from './components/bus-stop-time/bus-stop-time.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'Bus',
    component: BusListComponent
  },
  {
    path:'BusStop',
    component: BusStopListComponent
  },
  {
    path: 'BusDetail/:id',
    component: BusDetailComponent
  },
  {
    path: 'BusTime/:id',
    component: BusStopTimeComponent
  },
  {
    path: 'BusDetail/location/:id',
    component: BusLocationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
