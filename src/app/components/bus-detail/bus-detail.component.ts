import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RmtsService } from 'src/app/service/rmts.service';

@Component({
  selector: 'app-bus-detail',
  templateUrl: './bus-detail.component.html',
  styleUrls: ['./bus-detail.component.css']
})
export class BusDetailComponent implements OnInit {

  id: any;
  BusDetail: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private rmtsService: RmtsService
  ) { }

  ngOnInit(): void {
    this.id =  this.route.snapshot.params['id'];
    this.getBusDetail(this.id)
  }

  getBusDetail(id:any) {
    this.rmtsService.getAllBus(id).subscribe((res:any) => {
      if(res.success)
        this.BusDetail = res.data[0];
      console.log(this.BusDetail);
    })
  }
}
