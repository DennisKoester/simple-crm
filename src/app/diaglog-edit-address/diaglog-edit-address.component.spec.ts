import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaglogEditAddressComponent } from './diaglog-edit-address.component';

describe('DiaglogEditAddressComponent', () => {
  let component: DiaglogEditAddressComponent;
  let fixture: ComponentFixture<DiaglogEditAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiaglogEditAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiaglogEditAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
