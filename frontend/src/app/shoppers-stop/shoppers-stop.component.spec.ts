import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppersStopComponent } from './shoppers-stop.component';

describe('ShoppersStopComponent', () => {
  let component: ShoppersStopComponent;
  let fixture: ComponentFixture<ShoppersStopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppersStopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppersStopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
