import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertArrayElementComponent } from './insert-array-element.component';

describe('InsertArrayElementComponent', () => {
  let component: InsertArrayElementComponent;
  let fixture: ComponentFixture<InsertArrayElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertArrayElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertArrayElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
