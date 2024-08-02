import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxisbankComponent } from './axisbank.component';

describe('AxisbankComponent', () => {
  let component: AxisbankComponent;
  let fixture: ComponentFixture<AxisbankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AxisbankComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AxisbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
