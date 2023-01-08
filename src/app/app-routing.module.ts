import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusDetailComponent } from './components/bus-detail/bus-detail.component';
import { BusListComponent } from './components/bus-list/bus-list.component';
import { BusStopListComponent } from './components/bus-stop-list/bus-stop-list.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
