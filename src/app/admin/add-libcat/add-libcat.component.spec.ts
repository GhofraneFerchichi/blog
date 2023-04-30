import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLibcatComponent } from './add-libcat.component';

describe('AddLibcatComponent', () => {
  let component: AddLibcatComponent;
  let fixture: ComponentFixture<AddLibcatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLibcatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLibcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
