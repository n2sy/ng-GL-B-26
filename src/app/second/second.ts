import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-second',
  imports: [],
  templateUrl: './second.html',
})
export class Second {
 @Input() txtColor : string = "green";
 @Input() studentName : string = "nidhal";
 
 @Output() eventToParent = new EventEmitter();
 sendEventToFirst() {
    this.eventToParent.emit("Message de la part du Second Component");
 }
}
