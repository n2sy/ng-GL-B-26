import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidat } from '../models/Candidat';
import { GestionCandidats } from '../services/gestion-candidats';

@Component({
  selector: 'app-update',
  imports: [FormsModule],
  templateUrl: './update.html',
  styleUrl: './update.css',
})
export class Update {
  candToEdit: Candidat;
  activateRoute = inject(ActivatedRoute);
  candSer = inject(GestionCandidats);
  router = inject(Router);

  ngOnInit() {
    this.candToEdit = this.candSer.getCandidateById(this.activateRoute.snapshot.params['id']);
  }

  submitHandler(formValue: any) {
    formValue.id = this.activateRoute.snapshot.params['id'];
    this.candSer.updateCandidate(formValue);
    this.router.navigateByUrl('/cv');
  }
}
