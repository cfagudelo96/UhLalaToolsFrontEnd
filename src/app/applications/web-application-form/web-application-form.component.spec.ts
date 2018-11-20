import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebApplicationFormComponent } from './web-application-form.component';

describe('WebApplicationFormComponent', () => {
  let component: WebApplicationFormComponent;
  let fixture: ComponentFixture<WebApplicationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebApplicationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebApplicationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
