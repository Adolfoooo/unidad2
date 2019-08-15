import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadinPage } from './loadin.page';

describe('LoadinPage', () => {
  let component: LoadinPage;
  let fixture: ComponentFixture<LoadinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadinPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
