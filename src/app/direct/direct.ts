import { NgStyle, NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-direct',
  imports: [NgStyle, NgClass],
  templateUrl: './direct.html',
  styleUrl: './direct.css',
})
export class Direct {
    bgColor = "pink";
    txtColor = "blue";
    font = "phosphate";
    
    class1 = true;
    class2 = true;
    class3 = false;
    
    updateClasses() {
        this.class1 = false;
        this.class3= true;
    }
}
