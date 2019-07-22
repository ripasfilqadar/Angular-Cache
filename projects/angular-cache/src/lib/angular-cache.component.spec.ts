import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCacheComponent } from './angular-cache.component';

describe('AngularCacheComponent', () => {
  let component: AngularCacheComponent;
  let fixture: ComponentFixture<AngularCacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularCacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularCacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
