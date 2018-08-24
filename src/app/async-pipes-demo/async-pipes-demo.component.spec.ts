import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncPipesDemoComponent } from './async-pipes-demo.component';

describe('AsyncPipesDemoComponent', () => {
  let component: AsyncPipesDemoComponent;
  let fixture: ComponentFixture<AsyncPipesDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncPipesDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncPipesDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
