import { Component, OnInit } from '@angular/core';
import { RmtsService } from 'src/app/service/rmts.service';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent implements OnInit {

  BusList:any;

  constructor(private rmtsService: RmtsService) { }

  ngOnInit(): void {
    this.getBusList();
  }

  getBusList() {
    this.rmtsService.getAllBus().subscribe((res:any) => {
      if(res.success)
        this.BusList = res.data;
    })
  }
}
