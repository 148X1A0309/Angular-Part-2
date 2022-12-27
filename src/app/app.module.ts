import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StructuralDirectivesComponent } from './Directives/structural-directives/structural-directives.component';
import { HeaderComponent } from './NewApp/header/header.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,StructuralDirectivesComponent ,HeaderComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
