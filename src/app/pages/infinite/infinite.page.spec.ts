import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfinitePage } from './infinite.page';

describe('InfinitePage', () => {
  let component: InfinitePage;
  let fixture: ComponentFixture<InfinitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfinitePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfinitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
