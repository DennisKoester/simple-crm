import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-diaglog-edit-address',
  templateUrl: './diaglog-edit-address.component.html',
  styleUrls: ['./diaglog-edit-address.component.scss'],
})
export class DiaglogEditAddressComponent {
  user: User;
  userId: string;
  loading = false;

  constructor(
    public dialogRef: MatDialogRef<DiaglogEditAddressComponent>,
    private firestore: AngularFirestore
  ) {}

  saveUser() {
    this.loading = true;
    this.firestore
      .collection('users')
      .doc(this.userId)
      .update(this.user.toJSON())
      .then(() => {
        this.loading = false;
        this.dialogRef.close();
      });
  }
}
