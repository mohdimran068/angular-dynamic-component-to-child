import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  template:
    '<button (click)="addComponentClick.emit()">select smiley</button>{{counter}}'
})
export class ToolbarComponent {
  @Output() addComponentClick = new EventEmitter();
  @Input() counter:number;
  constructor() {}
}
