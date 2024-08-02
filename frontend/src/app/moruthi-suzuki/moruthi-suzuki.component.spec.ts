import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoruthiSuzukiComponent } from './moruthi-suzuki.component';

describe('MoruthiSuzukiComponent', () => {
  let component: MoruthiSuzukiComponent;
  let fixture: ComponentFixture<MoruthiSuzukiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoruthiSuzukiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoruthiSuzukiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
