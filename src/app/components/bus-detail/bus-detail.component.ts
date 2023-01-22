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
  speech: any;
  BusDetail: any;
  TotalBusStop: number = 0;

  constructor(
    private route: ActivatedRoute,
    private rmtsService: RmtsService,
  ) { }

  ngOnInit(): void {
    this.speech = new SpeechSynthesisUtterance();
    this.id = this.route.snapshot.params['id'];
    this.getBusDetail(this.id)
  }

  speak(word:any) {
    this.speech.cancel();
    let voices = window.speechSynthesis.getVoices();
    this.speech.voice = voices[9];
		this.speech.text = word;
		this.speech.lang = "hi-IN";
		speechSynthesis.speak(this.speech);
  }

  getBusDetail(id: any) {
    this.rmtsService.getAllBus(id).subscribe((res: any) => {
      if (res.success)
        this.BusDetail = res.data[0];
        this.TotalBusStop = this.BusDetail.routes.length
    })
  }
}
