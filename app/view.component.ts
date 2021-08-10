import {
  Component,
  AfterViewInit,
  ViewChildren,
  QueryList,  
  ComponentFactoryResolver,
  ComponentFactory,
  OnInit, EventEmitter
} from '@angular/core';
import { TextComponent } from './text.component';
import { SectionComponent } from './section.component';

@Component({
  selector: 'app-view',
  template: `
    <div class="container" *ngFor="let number of [0,1,2,3,4]">
      <app-toolbar
        (addComponentClick)="onAddComponentClick(number)"
      ></app-toolbar>
      <div app-type="section" id="SECTION{{number}}" [active]="true"></div>
      <br />      
    </div>
  `
})
export class ViewComponent implements AfterViewInit, OnInit {
  @ViewChildren(SectionComponent) sections: QueryList<SectionComponent>;
  allSections: SectionComponent[];
  textComponentFactory: ComponentFactory<TextComponent>;
  

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    
    this.textComponentFactory = this.componentFactoryResolver.resolveComponentFactory(
      TextComponent
    );
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.allSections = this.sections.reduce((result, section, index) => {
      debugger;
        result.push(section);
      return result;
    }, []);
  }
  ngAddClick() {    
    this.allSections = this.sections.reduce((result, section, index) => {      
        result.push(section);
      return result;
    }, []);
  }
  onAddComponentClick(element: any) {
    this.allSections[element].viewContainerRef.clear();
    let instance  = this.allSections[element].viewContainerRef.createComponent(this.textComponentFactory, 0).instance;

    instance.counter = element;
        
  }
}
