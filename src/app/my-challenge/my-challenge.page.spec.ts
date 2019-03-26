import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyChallengePage } from './my-challenge.page';

describe('MyChallenge', () => {
  let component: MyChallengePage;
  let fixture: ComponentFixture<MyChallengePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyChallengePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyChallengePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
