import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHikeComponent } from './edit-hike.component';

describe('EditHikeComponent', () => {
  let component: EditHikeComponent;
  let fixture: ComponentFixture<EditHikeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditHikeComponent]
    });
    fixture = TestBed.createComponent(EditHikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
