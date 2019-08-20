import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JaehyungComponent } from './jaehyung.component';

describe('JaehyungComponent', () => {
  let component: JaehyungComponent;
  let fixture: ComponentFixture<JaehyungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JaehyungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JaehyungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
