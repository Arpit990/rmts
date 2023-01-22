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
  TotalBusStop: number = 0;

  constructor(
    private route: ActivatedRoute,
    private rmtsService: RmtsService,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getBusDetail(this.id)
  }

  speak(word:any) {
    let voices = window.speechSynthesis.getVoices();
    let speech = new SpeechSynthesisUtterance()
    speech.voice = voices[9];
		speech.text = word;
		speech.lang = "hi-IN";
		speechSynthesis.speak(speech);
  }

  getBusDetail(id: any) {
    this.rmtsService.getAllBus(id).subscribe((res: any) => {
      if (res.success)
        this.BusDetail = res.data[0];
        this.TotalBusStop = this.BusDetail.routes.length
    })
  }
}
