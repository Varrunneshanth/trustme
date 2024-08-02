import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianbankComponent } from './indianbank.component';

describe('IndianbankComponent', () => {
  let component: IndianbankComponent;
  let fixture: ComponentFixture<IndianbankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndianbankComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndianbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
