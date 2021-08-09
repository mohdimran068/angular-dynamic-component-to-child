import { Component, Input, ViewContainerRef } from '@angular/core';

@Component({
   selector: 'div[app-type=section]',
   template: ''
})
export class SectionComponent {
  @Input() active: boolean=false;
  @Input() id: string;
   constructor(public viewContainerRef: ViewContainerRef) { }   
}  