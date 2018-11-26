import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import {FormsModule} from '@angular/forms';
import {FactorialPipe} from './pipes/factorial.pipe';
import { BoldDirective } from './directives/bold.directive';
import { HeroListComponent } from './hero-list/hero-list.component'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailsComponent,
    FactorialPipe,
    BoldDirective,
    HeroListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
