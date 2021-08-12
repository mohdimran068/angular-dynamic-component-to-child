import {
  Component,
  AfterViewInit,
  ViewChildren,
  QueryList,
  ComponentFactoryResolver,
  ComponentFactory,
  OnInit,
  EventEmitter,
  Input,
  OnChanges
} from '@angular/core';
import { TextComponent } from './text.component';
import { SectionComponent } from './section.component';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-view',
  template: `
    <div class="container">
      <div *ngFor="let in of subQuestions(question); let i = index">
        <app-toolbar
          [counter]="i"
          (addComponentClick)="onAddComponentClick(i)"
        ></app-toolbar>
        <div app-type="section" id="SECTION{{ i }}"></div>
      </div>
      <br />
    </div>
  `
})
export class ViewComponent implements OnChanges, AfterViewInit, OnInit {
  @Input() counter: number;
  @Input() question: any = {};
  @ViewChildren(SectionComponent) sections: QueryList<SectionComponent>;
  allSections: SectionComponent[];
  textComponentFactory: ComponentFactory<TextComponent>;

  subQuestions(i: number) {
    return new Array(i);
  }
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    this.textComponentFactory = this.componentFactoryResolver.resolveComponentFactory(
      TextComponent
    );
  }

  ngOnInit() {}
  ngOnChanges() {
    debugger;
    this.allSections = [];
    this.sections = new QueryList<SectionComponent>();
    let items = this.subQuestions(this.counter);

    items.forEach(x => this.ngAddClick());
  }
  ngAfterViewInit() {
    // this.allSections = this.sections.reduce((result, section, index) => {
    //     result.push(section);
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
    // this.ngAddClick();
    this.allSections[0].viewContainerRef.clear();
    let instance = this.allSections[0].viewContainerRef.createComponent(
      this.textComponentFactory,
      0
    ).instance;

    instance.counter = element;
  }
}
