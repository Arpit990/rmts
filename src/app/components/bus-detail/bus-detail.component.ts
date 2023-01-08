import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RmtsService } from 'src/app/service/rmts.service';

import * as uuid from 'uuid';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-bus-detail',
  templateUrl: './bus-detail.component.html',
  styleUrls: ['./bus-detail.component.css']
})
export class BusDetailComponent implements OnInit {

  id: any;
  BusDetail: any;
  BusLocation: any;
  TotalBusStop: number = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private rmtsService: RmtsService,
    private apollo: Apollo
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getBusDetail(this.id)

    setTimeout(() => {
      this.getBusLiveLocation();
    }, 2000)
  }

  getBusDetail(id: any) {
    this.rmtsService.getAllBus(id).subscribe((res: any) => {
      if (res.success)
        this.BusDetail = res.data[0];
        this.TotalBusStop = this.BusDetail.routes.length
    })
  }

  getBusLiveLocation() {
    var requestId = uuid.v4();
    this.apollo
      .watchQuery<any>({
        query: gql`
        {
            getBusLoc(busNo: "${this.id}", requestId: "${requestId}") {
                Lastdate
                Latitude
                Location
                Longitude
                Speed
                VehName
                VehicleStatus
            } 
        }
    `,
      })
      .valueChanges.subscribe((result) => {
        this.BusLocation = result.data.getBusLoc;
      });
  }
}
