import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichPostComponent } from './affich-post.component';

describe('AffichPostComponent', () => {
  let component: AffichPostComponent;
  let fixture: ComponentFixture<AffichPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
