import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { interval } from 'rxjs';
import { count, takeWhile } from 'rxjs/operators';
import { RmtsService } from 'src/app/service/rmts.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-bus-location',
  templateUrl: './bus-location.component.html',
  styleUrls: ['./bus-location.component.css']
})
export class BusLocationComponent implements OnInit {

  id: any;
  BusDetail: any;
  isAutoRefresh: any;
  BusLocation: any;

  constructor(
    private route: ActivatedRoute,
    private rmtsService: RmtsService,
    private apollo: Apollo
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getBusLiveLocation()
    this.getBusDetail(this.id);
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
        console.log(this.BusLocation)
      });
  }

  getBusDetail(id: any) {
    this.rmtsService.getAllBus(id).subscribe((res: any) => {
      if (res.success)
        this.BusDetail = res.data[0];
    })
  }

  checkClicked(val: any) {
    this.isAutoRefresh = !val;

    interval(7000).pipe(takeWhile(() => this.isAutoRefresh)).subscribe(() => {
      this.getBusLiveLocation()
    });
  }
}
