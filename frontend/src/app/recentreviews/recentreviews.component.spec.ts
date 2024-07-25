import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentreviewsComponent } from './recentreviews.component';

describe('RecentreviewsComponent', () => {
  let component: RecentreviewsComponent;
  let fixture: ComponentFixture<RecentreviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentreviewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecentreviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
