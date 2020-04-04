import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingTicketsComponent } from './booking-tickets.component';

describe('BookingTicketsComponent', () => {
  let component: BookingTicketsComponent;
  let fixture: ComponentFixture<BookingTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
