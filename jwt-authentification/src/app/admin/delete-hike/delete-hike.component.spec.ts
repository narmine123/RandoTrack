import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteHikeComponent } from './delete-hike.component';

describe('DeleteHikeComponent', () => {
  let component: DeleteHikeComponent;
  let fixture: ComponentFixture<DeleteHikeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteHikeComponent]
    });
    fixture = TestBed.createComponent(DeleteHikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
