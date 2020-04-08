import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicePage } from './indice.page';

describe('IndicePage', () => {
  let component: IndicePage;
  let fixture: ComponentFixture<IndicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
