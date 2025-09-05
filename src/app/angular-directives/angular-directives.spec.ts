import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDirectives } from './angular-directives';

describe('AngularDirectives', () => {
  let component: AngularDirectives;
  let fixture: ComponentFixture<AngularDirectives>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularDirectives]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularDirectives);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
