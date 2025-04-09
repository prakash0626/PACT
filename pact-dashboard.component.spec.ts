import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PactDashboardComponent } from './pact-dashboard.component';

describe('PactDashboardComponent', () => {
  let component: PactDashboardComponent;
  let fixture: ComponentFixture<PactDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PactDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PactDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
