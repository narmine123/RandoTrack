import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHikeComponent } from './add-hike.component';

describe('AddHikeComponent', () => {
  let component: AddHikeComponent;
  let fixture: ComponentFixture<AddHikeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddHikeComponent]
    });
    fixture = TestBed.createComponent(AddHikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
