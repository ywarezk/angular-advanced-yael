import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ButtonComponent } from './button.component';

fdescribe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('button click p is gone', () => {
    const button = fixture.debugElement.query(By.css('button'));
    // ButtonElement
    button.nativeElement.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    let p = fixture.debugElement.query(By.css('p'));
    expect(p).toBeNull;
    button.nativeElement.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    p = fixture.debugElement.query(By.css('p'));
    expect(p).toBeDefined;
  })
});
