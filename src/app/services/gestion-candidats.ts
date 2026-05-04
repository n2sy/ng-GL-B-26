import { Injectable } from '@angular/core';
import { Candidat } from '../models/Candidat';

@Injectable({
  providedIn: 'root',
})
export class GestionCandidats {
  private allCandidates: Candidat[] = [
    new Candidat(1, 'bart', 'simpson', 26, 'ingénieur', 'bart.jpeg'),
    new Candidat(2, 'homer', 'simpson', 52, 'chef de projet', 'homer.png'),
    new Candidat(3, 'lisa', 'simpson', 21, 'designer', 'lisa.png'),
    new Candidat(4, 'marge', 'simpson', 66, 'Analyste'),
  ];

  getCandidateById(candId: number) {
    return this.allCandidates.find((cand) => cand.id == candId);
  }

  getAllCandidates() {
    return this.allCandidates;
  }

  updateCandidate(uCand) {
    let i = this.allCandidates.findIndex((cand) => cand.id == uCand.id);
    this.allCandidates[i] = uCand;
  }

  deleteCandidate(idCand) {
    let i = this.allCandidates.findIndex((cand) => cand.id == idCand);
    this.allCandidates.splice(i, 1);
  }

  addNewCandidate(newCand) {
    newCand.id = this.allCandidates[this.allCandidates.length - 1].id + 1;
    this.allCandidates.push(newCand);
  }

  addCandidate() {
    this.allCandidates.push(new Candidat(1, 'NEW', 'CANDIDAT', 21, 'designer', 'lisa.png'));
  }
}
