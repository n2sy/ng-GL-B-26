import { Injectable } from '@angular/core';
import { Candidat } from '../models/Candidat';

@Injectable({
  providedIn: 'root',
})
export class GestionCandidats {
  private allCandidates: Candidat[] = [
    new Candidat(1, 'bart', 'simpson', 26, 'ingénieur', 'bart.jpeg'),
    new Candidat(2, 'homer', 'simpson', 52, 'chef de projet', 'homer.png'),
    new Candidat(1, 'lisa', 'simpson', 21, 'designer', 'lisa.png'),
    new Candidat(4, 'marge', 'simpson', 66, 'Analyste'),
  ];
  
  getAllCandidates() {
    return this.allCandidates;
  }
  
  addCandidate() {
    this.allCandidates.push(
         new Candidat(1, 'NEW', 'CANDIDAT', 21, 'designer', 'lisa.png'),
    )
  }
}
