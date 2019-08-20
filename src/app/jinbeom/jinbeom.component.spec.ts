import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JinbeomComponent } from './jinbeom.component';

describe('JinbeomComponent', () => {
  let component: JinbeomComponent;
  let fixture: ComponentFixture<JinbeomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JinbeomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JinbeomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
