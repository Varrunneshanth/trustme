import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TataMotorsComponent } from './tata-motors.component';

describe('TataMotorsComponent', () => {
  let component: TataMotorsComponent;
  let fixture: ComponentFixture<TataMotorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TataMotorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TataMotorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
