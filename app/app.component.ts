import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 5';
  questions:any[]=[1,2,3,4];
  currentQuestion:any={}
  counter:number=0;
  increment(){
    if(this.counter < this.questions.length)this.counter++;
    else this.counter=0
    this.currentQuestion = this.questions[this.counter];
  }
}
