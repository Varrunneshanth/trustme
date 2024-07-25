import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotlereviewComponent } from './totlereview.component';

describe('TotlereviewComponent', () => {
  let component: TotlereviewComponent;
  let fixture: ComponentFixture<TotlereviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotlereviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TotlereviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
