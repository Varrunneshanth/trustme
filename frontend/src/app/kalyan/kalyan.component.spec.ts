import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KalyanComponent } from './kalyan.component';

describe('KalyanComponent', () => {
  let component: KalyanComponent;
  let fixture: ComponentFixture<KalyanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KalyanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KalyanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
