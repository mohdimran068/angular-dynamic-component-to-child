import { Component,Input, Output, EventEmitter } from '@angular/core';

@Component({
   selector: 'app-text',
   template: '<div *ngIf="isActive"><p >{{counter}}</p> <button (click)="hideMe()"><b>change rating </b></button></div>'
})
export class TextComponent {
   @Input() counter:any
   // @Output() hideMeClick = new EventEmitter();
   isActive:boolean=true;
   constructor() { }
   hideMe(){
      this.isActive=false;
      // console.log('hideMe is clicked...')
   }
}