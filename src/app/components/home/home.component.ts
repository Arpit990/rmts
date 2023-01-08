import { Component, OnInit } from '@angular/core';
import { RmtsService } from 'src/app/service/rmts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  totalBus:any = 0;
  totalBusStop:any = 0;

  constructor(private rmtsService: RmtsService) { }

  ngOnInit(): void {
    this.getCount();
  }

  getCount() {
    this.rmtsService.getAllBus().subscribe((res:any) => {
      if(res.success)
        this.totalBus = res.data.length;
    })
    this.rmtsService.getAllBusStop().subscribe((res:any) => {
      if(res.success)
        this.totalBusStop = res.data.length;
    })
  }
}
