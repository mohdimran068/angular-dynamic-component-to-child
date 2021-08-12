import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SectionComponent } from './section.component';
import { TextComponent } from './text.component';
import { ToolbarComponent } from './toolbar.component';
import { ViewComponent } from './view.component';

import { AppComponent } from './app.component';
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, SectionComponent, TextComponent, ToolbarComponent, ViewComponent],  
  bootstrap: [AppComponent],
  entryComponents: [TextComponent,ViewComponent]
})
export class AppModule { }
