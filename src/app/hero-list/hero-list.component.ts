import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../domain/domain.hero';
import {HeroHttpService} from '../service/hero-http.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  @Input()
  //heroes: Hero[];
  heroes: Hero[] = [];
  currentHero: Hero;

  constructor( private heroHttpService: HeroHttpService) { }

  ngOnInit() {
    this.heroHttpService.findAll().subscribe(x => this.heroes = x);
  }

  onSelect1(hero: Hero) {
    this.currentHero = hero;
  }

}
