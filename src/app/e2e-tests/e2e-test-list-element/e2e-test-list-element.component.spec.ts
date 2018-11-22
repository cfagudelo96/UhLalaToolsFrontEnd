import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E2eTestListElementComponent } from './e2e-test-list-element.component';

describe('E2eTestListElementComponent', () => {
  let component: E2eTestListElementComponent;
  let fixture: ComponentFixture<E2eTestListElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E2eTestListElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E2eTestListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
