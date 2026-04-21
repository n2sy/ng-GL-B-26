import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Candidat } from '../models/Candidat';
import { NoAvatarPipe } from '../pipes/no-avatar-pipe';
import { GestionRecrues } from '../services/gestion-recrues';

@Component({
  selector: 'app-details',
  imports: [NoAvatarPipe, RouterLink],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
  @Input() selCandidat: Candidat;

  private recSer = inject(GestionRecrues);

  ajouterRecrue() {
    this.recSer.addRecrue(this.selCandidat);
  }
}
