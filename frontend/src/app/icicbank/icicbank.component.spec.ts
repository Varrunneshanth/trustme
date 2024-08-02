import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcicbankComponent } from './icicbank.component';

describe('IcicbankComponent', () => {
  let component: IcicbankComponent;
  let fixture: ComponentFixture<IcicbankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IcicbankComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IcicbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
