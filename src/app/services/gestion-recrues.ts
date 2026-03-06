import { Injectable } from '@angular/core';
import { Candidat } from '../models/Candidat';

@Injectable()
export class GestionRecrues {
  allRecrues : Candidat[] = [];
  
  addRecrue(newRecrue) {
    if(this.allRecrues.indexOf(newRecrue) == -1)
         this.allRecrues.push(newRecrue)
    else
        alert("Ce candidat a déjà été recruté !")
  }
}
