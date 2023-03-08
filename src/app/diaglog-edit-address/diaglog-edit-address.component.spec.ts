import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

import { DiaglogEditAddressComponent } from './diaglog-edit-address.component';

describe('DiaglogEditAddressComponent', () => {
  let component: DiaglogEditAddressComponent;
  let fixture: ComponentFixture<DiaglogEditAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularFireModule.initializeApp(environment.firebase),
      , AngularFireModule],
      declarations: [DiaglogEditAddressComponent],
      providers: [
        MatDialogModule,
        {
          provide: MatDialogRef,
          useValue: {},
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DiaglogEditAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
