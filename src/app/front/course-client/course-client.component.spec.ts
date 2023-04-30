import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseClientComponent } from './course-client.component';

describe('CourseClientComponent', () => {
  let component: CourseClientComponent;
  let fixture: ComponentFixture<CourseClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
