import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularPeoplePage } from './popular-people.page';

describe('PopularPeoplePage', () => {
  let component: PopularPeoplePage;
  let fixture: ComponentFixture<PopularPeoplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularPeoplePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularPeoplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
