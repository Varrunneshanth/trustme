import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestofbankComponent } from './bestofbank.component';

describe('BestofbankComponent', () => {
  let component: BestofbankComponent;
  let fixture: ComponentFixture<BestofbankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestofbankComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BestofbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
