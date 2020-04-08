import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMoviePage } from './top-movie.page';

describe('TopMoviePage', () => {
  let component: TopMoviePage;
  let fixture: ComponentFixture<TopMoviePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopMoviePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMoviePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
