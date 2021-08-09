import { Component,Input, Output, EventEmitter } from '@angular/core';

@Component({
   selector: 'app-text',
   template: '<div *ngIf="isActive"><p > dddd {{message}}</p> <button (click)="hideMe()">change rating </button></div>'
})
export class TextComponent {
   @Input() message:any
   @Output() hideMeClick = new EventEmitter();
   isActive:boolean=true;
   constructor() { }
   hideMe(){
      this.isActive=false;
      // console.log('hideMe is clicked...')
   }
}