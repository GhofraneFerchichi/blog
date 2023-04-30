import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListClientComponent } from './course-list-client.component';

describe('CourseListClientComponent', () => {
  let component: CourseListClientComponent;
  let fixture: ComponentFixture<CourseListClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseListClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
