import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Io500Component } from './io500.component';

describe('Io500Component', () => {
  let component: Io500Component;
  let fixture: ComponentFixture<Io500Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Io500Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Io500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
