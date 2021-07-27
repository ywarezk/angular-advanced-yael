import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateForDashboardComponent } from './private-for-dashboard.component';

describe('PrivateForDashboardComponent', () => {
  let component: PrivateForDashboardComponent;
  let fixture: ComponentFixture<PrivateForDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateForDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateForDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
