import { Component, OnInit, TemplateRef, ViewChild, AfterViewInit, Inject, ViewContainerRef, ComponentFactoryResolver, ComponentRef  } from '@angular/core';
import { ViewComponent } from './view.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  @ViewChild('appenHere',{read : ViewContainerRef}) target: ViewContainerRef;

  private componentRef: ComponentRef<any>;
  name = 'Angular 5';
  questions:any[]=[1,2,3,4];
  currentQuestion:any={}
  counter:number=0;

  constructor(private resolver: ComponentFactoryResolver) { }
  increment(){
    debugger;
    this.target.clear();
    if(this.counter < this.questions.length)this.counter++;
    else this.counter=0
    this.currentQuestion = this.questions[this.counter];

    let childComponent = this.resolver.resolveComponentFactory(ViewComponent);
     
    let instance = this.target.createComponent(childComponent,0).instance; // <-- here it's throws an error!
    instance.counter=this.counter;
    // this.componentRef.question= this.currentQuestion;
  }
}
