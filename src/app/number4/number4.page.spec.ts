import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Number4Page } from './number4.page';

describe('Number4Page', () => {
  let component: Number4Page;
  let fixture: ComponentFixture<Number4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Number4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Number4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
