import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TowComponent } from './tow.component';

describe('TowComponent', () => {
  let component: TowComponent;
  let fixture: ComponentFixture<TowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
