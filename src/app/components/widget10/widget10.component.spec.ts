import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Widget10Component } from './widget10.component';

describe('Widget10Component', () => {
  let component: Widget10Component;
  let fixture: ComponentFixture<Widget10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Widget10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Widget10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
