import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatAvailablityComponent } from './seat-availablity.component';

describe('SeatAvailablityComponent', () => {
  let component: SeatAvailablityComponent;
  let fixture: ComponentFixture<SeatAvailablityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeatAvailablityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeatAvailablityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
