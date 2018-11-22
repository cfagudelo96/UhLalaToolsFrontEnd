import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E2ETestFormComponent } from './e2e-test-form.component';

describe('E2ETestFormComponent', () => {
  let component: E2ETestFormComponent;
  let fixture: ComponentFixture<E2ETestFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E2ETestFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E2ETestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
