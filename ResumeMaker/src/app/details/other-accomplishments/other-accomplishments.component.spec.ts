import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherAccomplishmentsComponent } from './other-accomplishments.component';

describe('OtherAccomplishmentsComponent', () => {
  let component: OtherAccomplishmentsComponent;
  let fixture: ComponentFixture<OtherAccomplishmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherAccomplishmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherAccomplishmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
