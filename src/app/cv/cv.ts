import { Component } from '@angular/core';
import { Liste } from "../liste/liste";
import { Details } from "../details/details";
import { Candidat } from '../models/Candidat';

@Component({
  selector: 'app-cv',
  imports: [Liste, Details],
  templateUrl: './cv.html',
  styleUrl: './cv.css',
})
export class Cv {
   tabCandidats : Candidat[] = [
    new Candidat(1, "bart", "simpson", 26, "ingénieur", "bart.jpeg"),
    new Candidat(2, "homer", "simpson", 52, "chef de projet", "homer.png"),
    new Candidat(1, "lisa", "simpson", 21, "designer", "lisa.png"),
   ]

}
