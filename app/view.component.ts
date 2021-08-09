import {
  Component,
  AfterViewInit,
  ViewChildren,
  QueryList,
  ElementRef,
  ComponentFactoryResolver,
  ComponentFactory,
  OnInit, EventEmitter
} from '@angular/core';
import { TextComponent } from './text.component';
import { SectionComponent } from './section.component';

@Component({
  selector: 'app-view',
  template: `
    <div class="container">
      <app-toolbar
        (addComponentClick)="onAddComponentClick('0')"
      ></app-toolbar>
      <div app-type="section" id="SECTION1" [active]="true"></div>
      <br />
      <app-toolbar
        (addComponentClick)="onAddComponentClick('1')"
      ></app-toolbar>
      <div app-type="section" id="SECTION2"></div>
    </div>
  `
})
export class ViewComponent implements AfterViewInit, OnInit {
  @ViewChildren(SectionComponent) sections: QueryList<SectionComponent>;
  allSections: SectionComponent[];
  textComponentFactory: ComponentFactory<TextComponent>;
  hideMe: EventEmitter<number> = new EventEmitter<number>();

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {

    this.textComponentFactory = this.componentFactoryResolver.resolveComponentFactory(
      TextComponent
    );
  }

  ngAfterViewInit() {
    // debugger;
    // this.allSections = this.sections.reduce((result, section, index) => {
    //   debugger;
    //   // if (section.active) {
    //     result.push(section);
    //   // }
    //   return result;
    // }, []);
  }
  ngAddClick() {    
    this.allSections = this.sections.reduce((result, section, index) => {      
        result.push(section);
      return result;
    }, []);
  }
  onAddComponentClick(element: any) {
    // debugger;
    this.ngAddClick();
    this.allSections[element].viewContainerRef.clear();
  
    // this.allSections[element].id='section4'
    // this.allSections[element].viewContainerRef.createComponent(this.textComponentFactory);

    let instance  = this.allSections[element].viewContainerRef.createComponent(this.textComponentFactory, 0).instance;

    instance.message = "message -: " + element;
    instance.hideMeClick = this.hideMe;
    // this.allSections.forEach(section => {
    //   section.viewContainerRef.createComponent(this.textComponentFactory);
    // });
  }
}
