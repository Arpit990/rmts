import { Component, OnInit } from '@angular/core';
import { RmtsService } from 'src/app/service/rmts.service';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent implements OnInit {

  BusList:any;
  TotalBus: number = 0;

  constructor(private rmtsService: RmtsService) { }

  ngOnInit(): void {
    this.getBusList();
  }

  getBusList() {
    this.rmtsService.getAllBus().subscribe((res:any) => {
      if(res.success)
        this.BusList = res.data;
        this.TotalBus = this.BusList.length;
    });
  }

  searchBus(e:any) {
    console.log(e.target.value)
    if(e.target.value != null && e.target.value != undefined && e.target.value != '') {
      this.BusList = this.BusList.filter((obj:any) => obj.busNo.startsWith(e.target.value))
      this.TotalBus = this.BusList.length;
    }
    else {
      this.getBusList();
    }
  }
}
