import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroDetailsComponent} from './hero-details/hero-details.component';
import {AppComponent} from './app.component';
import {HeroListComponent} from './hero-list/hero-list.component';

const routes: Routes =
  [  {path: '', redirectTo: '/heroes', pathMatch: 'full'},
    {path: 'heroes', component: HeroListComponent},
    {path: 'detail/:id', component: HeroDetailsComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
