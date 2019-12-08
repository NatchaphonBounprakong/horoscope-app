import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoveComponent } from './love.component';

describe('LoveComponent', () => {
  let component: LoveComponent;
  let fixture: ComponentFixture<LoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoveComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
