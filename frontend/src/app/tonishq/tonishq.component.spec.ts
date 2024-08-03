import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TonishqComponent } from './tonishq.component';

describe('TonishqComponent', () => {
  let component: TonishqComponent;
  let fixture: ComponentFixture<TonishqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TonishqComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TonishqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
