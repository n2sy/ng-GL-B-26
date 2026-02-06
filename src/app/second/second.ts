import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-second',
  imports: [],
  templateUrl: './second.html',
})
export class Second {
 @Input() txtColor : string = "green";
}
