import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Candidat } from '../models/Candidat';
import { GestionCandidats } from '../services/gestion-candidats';

@Component({
  selector: 'app-infos',
  imports: [RouterLink],
  templateUrl: './infos.html',
  styleUrl: './infos.css',
})
export class Infos {
  candToShow: Candidat;
  activateRoute = inject(ActivatedRoute);
  candSer = inject(GestionCandidats);

  ngOnInit() {
    // Version Snapshot avec Params
    // console.log(this.activateRoute.snapshot.params['id']);
    // console.log(this.activateRoute.snapshot.params['name']);

    // Version Snapshot avec ParamMap
    //this.candidatId = this.activateRoute.snapshot.paramMap.get('id');

    // Version avec les observables
    // this.activateRoute.paramMap.subscribe({
    //   next: (data: ParamMap) => {
    //     this.candidatId = data.get('id');
    //   },
    //   // error: (err) => {},
    //   // complete: () => {},
    // });
    this.candToShow = this.candSer.getCandidateById(this.activateRoute.snapshot.params['id']);
  }
}
