import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExempleSignals } from './exemple-signals';

describe('ExempleSignals', () => {
  let component: ExempleSignals;
  let fixture: ComponentFixture<ExempleSignals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExempleSignals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExempleSignals);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
