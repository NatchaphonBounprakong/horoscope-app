import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthyComponent } from './healthy.component';

describe('HealthyComponent', () => {
  let component: HealthyComponent;
  let fixture: ComponentFixture<HealthyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthyComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
