import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E2ETestsListComponent } from './e2e-tests-list.component';

describe('E2eTestListComponent', () => {
  let component: E2ETestsListComponent;
  let fixture: ComponentFixture<E2ETestsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [E2ETestsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E2ETestsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
