import { Component, OnInit } from '@angular/core';
import { RmtsService } from 'src/app/service/rmts.service';

@Component({
  selector: 'app-bus-stop-list',
  templateUrl: './bus-stop-list.component.html',
  styleUrls: ['./bus-stop-list.component.css']
})
export class BusStopListComponent implements OnInit {

  BusStopList:any;
  totalBusStop:number = 0;

  constructor(private rmtsService: RmtsService) { }

  ngOnInit(): void {
    this.getBusStopList();
  }

  getBusStopList() {
    this.rmtsService.getAllBusStop().subscribe((res:any) => {
      if(res.success)
        this.BusStopList = res.data;
        this.totalBusStop = res.data.length
    })
  }

  searchBusStop(e:any) {
    console.log(e.target.value)
    if(e.target.value != null && e.target.value != undefined && e.target.value != '') {
      this.BusStopList = this.BusStopList.filter((x:any) => x.startsWith(e.target.value))
      this.totalBusStop = this.BusStopList.length;
    }
    else {
      this.getBusStopList();
    }
  }

  getBusByBusStop() {

  }
}
