import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HikeDetailComponent } from './hike-detail.component';

describe('HikeDetailComponent', () => {
  let component: HikeDetailComponent;
  let fixture: ComponentFixture<HikeDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HikeDetailComponent]
    });
    fixture = TestBed.createComponent(HikeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
