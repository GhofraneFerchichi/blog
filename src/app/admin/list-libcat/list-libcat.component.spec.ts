import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLibcatComponent } from './list-libcat.component';

describe('ListLibcatComponent', () => {
  let component: ListLibcatComponent;
  let fixture: ComponentFixture<ListLibcatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLibcatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLibcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
