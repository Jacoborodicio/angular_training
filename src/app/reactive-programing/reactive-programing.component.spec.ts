import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveProgramingComponent } from './reactive-programing.component';

describe('ReactiveProgramingComponent', () => {
  let component: ReactiveProgramingComponent;
  let fixture: ComponentFixture<ReactiveProgramingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveProgramingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveProgramingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
