import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostManagmentComponent } from './post-managment.component';

describe('PostManagmentComponent', () => {
  let component: PostManagmentComponent;
  let fixture: ComponentFixture<PostManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostManagmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
