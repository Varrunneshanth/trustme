import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabindiaComponent } from './fabindia.component';

describe('FabindiaComponent', () => {
  let component: FabindiaComponent;
  let fixture: ComponentFixture<FabindiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FabindiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FabindiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
