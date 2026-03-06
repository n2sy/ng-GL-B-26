import { Component, inject } from '@angular/core';
import { Liste } from '../liste/liste';
import { Details } from '../details/details';
import { Candidat } from '../models/Candidat';
import { CustomDir } from '../custom-dir';
import { First } from '../services/first';
import { GestionCandidats } from '../services/gestion-candidats';
import { Recrues } from "../recrues/recrues";
import { GestionRecrues } from '../services/gestion-recrues';

@Component({
  selector: 'app-cv',
  imports: [Liste, Details, CustomDir, Recrues],
  templateUrl: './cv.html',
  styleUrl: './cv.css',
  providers : [First, GestionRecrues]
})
export class Cv {
  tabCandidats: Candidat[] = [];

  selectedCandidat: Candidat;

  //1ere méthode
  constructor(private firstSer : First) {}

  //2ème méthode
  //private firstSer = inject(First);
  private candSer = inject(GestionCandidats);

  ngOnInit() {
   this.firstSer.afficherBonjour();
    this.tabCandidats = this.candSer.getAllCandidates();
  }
  
  addHandler() {
    this.candSer.addCandidate();
  }
  
  showListCandidates() {
    console.log(this.candSer.getAllCandidates());
    
  }

  recupererCandidatSelectionne(cand) {
    this.selectedCandidat = cand;
  }
}
