import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantaloonsComponent } from './pantaloons.component';

describe('PantaloonsComponent', () => {
  let component: PantaloonsComponent;
  let fixture: ComponentFixture<PantaloonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PantaloonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PantaloonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
