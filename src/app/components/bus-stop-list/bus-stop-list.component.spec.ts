import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusStopListComponent } from './bus-stop-list.component';

describe('BusStopListComponent', () => {
  let component: BusStopListComponent;
  let fixture: ComponentFixture<BusStopListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusStopListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusStopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
