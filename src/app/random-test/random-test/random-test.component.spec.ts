import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomTestComponent } from './random-test.component';

describe('RandomTestComponent', () => {
  let component: RandomTestComponent;
  let fixture: ComponentFixture<RandomTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
