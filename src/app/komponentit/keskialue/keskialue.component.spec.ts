import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeskialueComponent } from './keskialue.component';

describe('KeskialueComponent', () => {
  let component: KeskialueComponent;
  let fixture: ComponentFixture<KeskialueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeskialueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeskialueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
