import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Widget8Component } from './widget8.component';

describe('Widget8Component', () => {
  let component: Widget8Component;
  let fixture: ComponentFixture<Widget8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Widget8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Widget8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
