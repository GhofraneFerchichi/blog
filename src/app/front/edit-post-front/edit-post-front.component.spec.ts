import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPostFrontComponent } from './edit-post-front.component';

describe('EditPostFrontComponent', () => {
  let component: EditPostFrontComponent;
  let fixture: ComponentFixture<EditPostFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPostFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPostFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
