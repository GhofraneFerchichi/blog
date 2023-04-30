import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentManagmentComponent } from './comment-managment.component';

describe('CommentManagmentComponent', () => {
  let component: CommentManagmentComponent;
  let fixture: ComponentFixture<CommentManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentManagmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
