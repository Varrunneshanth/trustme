import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcJComponent } from './pc-j.component';

describe('PcJComponent', () => {
  let component: PcJComponent;
  let fixture: ComponentFixture<PcJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PcJComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PcJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
