import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import * as uuid from 'uuid';

@Component({
  selector: 'app-bus-location',
  templateUrl: './bus-location.component.html',
  styleUrls: ['./bus-location.component.css']
})
export class BusLocationComponent implements OnInit {

  id: any;
  BusLocation: any;

  constructor(
    private route: ActivatedRoute,
    private apollo: Apollo
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    setTimeout(() => {
      this.getBusLiveLocation();
    }, 1000)
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
