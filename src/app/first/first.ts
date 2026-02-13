import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Second } from "../second/second";

@Component({
  selector: 'app-first',
  imports: [FormsModule, Second],
  templateUrl: './first.html'
})
export class First {
    prenom : string = "Aziz";
    year : number = 2026;
    
    bgColor : string = "pink";
    hd : boolean = false;
    
    clickHandler() {
        alert("J'ai été cliqué !")
    }
    
    updatePrenom(inpValue : any) {
        //console.log(inp);
        
         this.prenom = inpValue;
    }
    
    traitement(msg : any) {
        console.log(msg);
        this.prenom = msg
        
    }

}
