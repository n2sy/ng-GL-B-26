import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { GestionCandidats } from '../services/gestion-candidats';

@Component({
  selector: 'app-add',
  imports: [FormsModule],
  templateUrl: './add.html',
  styleUrl: './add.css',
})
export class Add {
  candSer = inject(GestionCandidats);
  router = inject(Router);
  submitHandler(formValue) {
    this.candSer.addNewCandidate(formValue);
    this.router.navigateByUrl('/cv');
  }
}
