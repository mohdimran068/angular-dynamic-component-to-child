import { Component, Output, EventEmitter } from '@angular/core';
import { SectionComponent } from './section.component';
import { TextComponent } from './text.component';

@Component({
  selector: 'app-toolbar',
  template:
    '<button (click)="addComponentClick.emit()">select smiley</button>'
})
export class ToolbarComponent {
  @Output() addComponentClick = new EventEmitter();
  constructor() {}
}
