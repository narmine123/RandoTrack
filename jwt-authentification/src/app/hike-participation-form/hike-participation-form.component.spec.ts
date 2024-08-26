import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HikeParticipationFormComponent } from './hike-participation-form.component';

describe('HikeParticipationFormComponent', () => {
  let component: HikeParticipationFormComponent;
  let fixture: ComponentFixture<HikeParticipationFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HikeParticipationFormComponent]
    });
    fixture = TestBed.createComponent(HikeParticipationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
