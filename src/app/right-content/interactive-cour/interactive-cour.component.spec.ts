import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveCourComponent } from './interactive-cour.component';

describe('InteractiveCourComponent', () => {
  let component: InteractiveCourComponent;
  let fixture: ComponentFixture<InteractiveCourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractiveCourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractiveCourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
