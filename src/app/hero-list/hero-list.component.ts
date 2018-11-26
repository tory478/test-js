import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../domain/domain.hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  @Input()
  //heroes: Hero[];
  heroes: Hero[] = [{
    id: 1,
    name: 'Windstorm',
    date: new Date()
  }, {
    id: 2,
    name: 'Apple iPhone',
    date: new Date()
  }, {
    id: 3,
    name: 'Huawei Mate',
    date: new Date()
  }, {
    id: 4,
    name: 'Samsung Galaxy',
    date: new Date()
  }];
  currentHero: Hero;

  constructor() { }

  ngOnInit() {
  }

  onSelect1(hero: Hero) {
    this.currentHero = hero;
  }

}
