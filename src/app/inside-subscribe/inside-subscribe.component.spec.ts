import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideSubscribeComponent } from './inside-subscribe.component';

describe('InsideSubscribeComponent', () => {
  let component: InsideSubscribeComponent;
  let fixture: ComponentFixture<InsideSubscribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsideSubscribeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsideSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
