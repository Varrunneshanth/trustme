import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MalabarGoldComponent } from './malabar-gold.component';

describe('MalabarGoldComponent', () => {
  let component: MalabarGoldComponent;
  let fixture: ComponentFixture<MalabarGoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MalabarGoldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MalabarGoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
