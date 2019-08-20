import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SangwonComponent } from './sangwon.component';

describe('SangwonComponent', () => {
  let component: SangwonComponent;
  let fixture: ComponentFixture<SangwonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SangwonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SangwonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
