import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RmtsService } from 'src/app/service/rmts.service';

@Component({
  selector: 'app-bus-stop-time',
  templateUrl: './bus-stop-time.component.html',
  styleUrls: ['./bus-stop-time.component.css']
})
export class BusStopTimeComponent implements OnInit {

  up = 'Up'
  down = 'Down'
  id: any;
  busTime:any = [];
  routeUp:any = [];
  routeDown:any = [];
  temp = ['t1','t2','t3','t4', 't5', 't6', 't7', 't8', 't9', 't10', 't11','t12','t13','t14', 't15', 't16', 't17', 't18', 't19', 't20', 't21', 't22']
  constructor(
    private route: ActivatedRoute,
    private rmtsService: RmtsService
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getBusTimeDetail(this.id)
  }

  getBusTimeDetail(busNo:any) {
    this.rmtsService.getBusTimeFromJSON().subscribe(data => {
      this.busTime = data;
      this.routeUp = this.busTime.filter((obj:any) => obj.BusNo == `R ${busNo}` && obj.Route == this.up)
    })
  }
}
