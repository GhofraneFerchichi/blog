import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibElmListComponent } from './lib-elm-list.component';

describe('LibElmListComponent', () => {
  let component: LibElmListComponent;
  let fixture: ComponentFixture<LibElmListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibElmListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibElmListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
