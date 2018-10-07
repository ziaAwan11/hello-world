import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManeTagComponent } from './mane-tag.component';

describe('ManeTagComponent', () => {
  let component: ManeTagComponent;
  let fixture: ComponentFixture<ManeTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManeTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManeTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
