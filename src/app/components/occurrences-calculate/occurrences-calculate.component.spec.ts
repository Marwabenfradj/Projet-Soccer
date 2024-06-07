import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OccurrencesCalculateComponent } from './occurrences-calculate.component';

describe('OccurrencesCalculateComponent', () => {
  let component: OccurrencesCalculateComponent;
  let fixture: ComponentFixture<OccurrencesCalculateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OccurrencesCalculateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OccurrencesCalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
