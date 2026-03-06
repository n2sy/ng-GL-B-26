import { Component, inject } from '@angular/core';
import { GestionRecrues } from '../services/gestion-recrues';
import { Item } from '../item/item';

@Component({
  selector: 'app-recrues',
  imports: [Item],
  templateUrl: './recrues.html',
  styleUrl: './recrues.css',
})
export class Recrues {
    public recSer = inject(GestionRecrues);

}
