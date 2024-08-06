import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiginSigupComponent } from './sigin-sigup.component';

describe('SiginSigupComponent', () => {
  let component: SiginSigupComponent;
  let fixture: ComponentFixture<SiginSigupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiginSigupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SiginSigupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
