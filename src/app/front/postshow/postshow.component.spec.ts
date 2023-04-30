import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostshowComponent } from './postshow.component';

describe('PostshowComponent', () => {
  let component: PostshowComponent;
  let fixture: ComponentFixture<PostshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostshowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
