import { Component, signal } from '@angular/core';
import { First } from "./first/first";
import { Cv } from "./cv/cv";

@Component({
  selector: 'app-root',
  imports: [First, Cv],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('GL-B-26');
}
