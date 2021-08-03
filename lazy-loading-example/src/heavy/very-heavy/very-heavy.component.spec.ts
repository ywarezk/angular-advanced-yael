import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeryHeavyComponent } from './very-heavy.component';

describe('VeryHeavyComponent', () => {
  let component: VeryHeavyComponent;
  let fixture: ComponentFixture<VeryHeavyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeryHeavyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeryHeavyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
