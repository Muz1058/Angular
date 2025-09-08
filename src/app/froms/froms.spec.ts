import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Froms } from './froms';

describe('Froms', () => {
  let component: Froms;
  let fixture: ComponentFixture<Froms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Froms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Froms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
