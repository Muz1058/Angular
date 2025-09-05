import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForContextualVariable } from './for-contextual-variable';

describe('ForContextualVariable', () => {
  let component: ForContextualVariable;
  let fixture: ComponentFixture<ForContextualVariable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForContextualVariable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForContextualVariable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
