import { Component, EventEmitter, input, Input, InputSignal, output, Output } from '@angular/core';

@Component({
  selector: 'app-second',
  imports: [],
  templateUrl: './second.html',
})
export class Second {
//  @Input() txtColor : string = "green";
 txtColor : InputSignal<string> = input<string>("green");
 @Input() studentName : string = "nidhal";
 
//  @Output() eventToParent = new EventEmitter();
 eventToParent = output<string>(
    {
        'alias' : "nidhalEvent"
    }
 );
 sendEventToFirst() {
    this.eventToParent.emit("Message de la part du Second Component");
 }
}
