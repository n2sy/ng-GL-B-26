import { Injectable } from '@angular/core';
import { GestionCandidats } from './gestion-candidats';

@Injectable()
export class First {
    
    constructor(private gestionCandidat : GestionCandidats) {
        
    }
    afficherBonjour() {
        console.log("bonjour, je suis le first service");
       console.log(this.gestionCandidat.getAllCandidates());
        
        
    }
  
}
