import { Component, Input } from '@angular/core';
import { Candidat } from '../models/Candidat';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
   @Input() selCandidat : Candidat
}
