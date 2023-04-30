import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLibElementComponent } from './add-lib-element.component';

describe('AddLibElementComponent', () => {
  let component: AddLibElementComponent;
  let fixture: ComponentFixture<AddLibElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLibElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLibElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
