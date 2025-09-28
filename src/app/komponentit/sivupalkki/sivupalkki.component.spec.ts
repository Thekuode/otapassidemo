import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SivupalkkiComponent } from './sivupalkki.component';

describe('SivupalkkiComponent', () => {
  let component: SivupalkkiComponent;
  let fixture: ComponentFixture<SivupalkkiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SivupalkkiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SivupalkkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
