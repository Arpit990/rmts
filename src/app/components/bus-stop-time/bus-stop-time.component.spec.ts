import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusStopTimeComponent } from './bus-stop-time.component';

describe('BusStopTimeComponent', () => {
  let component: BusStopTimeComponent;
  let fixture: ComponentFixture<BusStopTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusStopTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusStopTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
