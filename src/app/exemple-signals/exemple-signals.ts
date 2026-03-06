import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-exemple-signals',
  imports: [],
  templateUrl: './exemple-signals.html',
  styleUrl: './exemple-signals.css',
})
export class ExempleSignals {
    language : WritableSignal<string> = signal<string>('java');
    year : WritableSignal<number> = signal<number>(2026);
    
    message : Signal<string> = computed(() => {
        return `Je suis en ${this.year()}`
    })
    
    constructor() {
        effect(() => {
            alert(`Year est passé ${this.year()}`)
        })
    }
    
    incrementYear() {
        this.year.update(prev => {            
            return ++prev;
        })
        
        
    }
    
    updateLanguage() {
        this.language.set("Php")
    }
    
    updateLanguage2() {
        this.language.update((previousValue) => {
            return `${previousValue} + Ruby`
        })
        // A eviter  this.language.set( this.language() + " et Php")
    }
    
}
