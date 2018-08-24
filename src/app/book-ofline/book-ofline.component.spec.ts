import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookOflineComponent } from './book-ofline.component';

describe('BookOflineComponent', () => {
  let component: BookOflineComponent;
  let fixture: ComponentFixture<BookOflineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookOflineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookOflineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
