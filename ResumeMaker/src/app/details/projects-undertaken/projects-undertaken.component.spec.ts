import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsUndertakenComponent } from './projects-undertaken.component';

describe('ProjectsUndertakenComponent', () => {
  let component: ProjectsUndertakenComponent;
  let fixture: ComponentFixture<ProjectsUndertakenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsUndertakenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsUndertakenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
