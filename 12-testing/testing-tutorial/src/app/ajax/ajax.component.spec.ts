import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';

import { AjaxComponent } from './ajax.component';

const testData = [
  { "id": 10104, "title": "title:0.7193547719438698", "description": "description:0.7402325067755231", "group": "group:test", "when": "2020-12-02T20:47:58.628000Z" },
  { "id": 10108, "title": "title:0.824672929631804", "description": "description:0.00103177017009215", "group": "group:test", "when": "2020-12-02T20:55:26.559000Z" },
  { "id": 10112, "title": "title:0.4579411370433868", "description": "description:0.6001902184924468", "group": "group:test", "when": "2020-12-02T20:57:09.100000Z" },
  { "id": 10120, "title": "title:0.8766124564414226", "description": "description:0.3741738440640603", "group": "group:test", "when": "2020-12-02T20:59:11.858000Z" },
  { "id": 10124, "title": "title:0.8054663614131061", "description": "description:0.984972064102974", "group": "group:test", "when": "2020-12-02T20:59:13.634000Z" }
]

describe('AjaxComponent', () => {
  let component: AjaxComponent;
  let fixture: ComponentFixture<AjaxComponent>;

  describe('success', () => {
    /**
     * Configure module - minimum module to test our component
     */
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [AjaxComponent],
        providers: [
          {
            provide: HttpClient,
            useValue: {
              get: (url: string) => of(testData)
            }
          }
        ]
      })
        .compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(AjaxComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('component contains 5 lis', () => {
      const lis = fixture.debugElement.queryAll(By.css('li'));
      expect(lis.length).toEqual(5);
    })
  })

  describe('error', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [AjaxComponent],
        providers: [
          {
            provide: HttpClient,
            useValue: {
              get: (url: string) => throwError(new Error('something happened'))
            }
          }
        ]
      })
        .compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(AjaxComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('component displays error', () => {
      const lis = fixture.debugElement.queryAll(By.css('li'));
      expect(lis.length).toEqual(0);
      const p = fixture.debugElement.query(By.css('p'));
      expect(p.nativeElement.textContent.trim()).toEqual('something happened')
    })
  });


});
