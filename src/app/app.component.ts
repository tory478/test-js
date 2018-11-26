import {Component, OnInit} from '@angular/core';
import {LoggerService} from './service/logger.service';
import {Hero} from './domain/domain.hero';
import {HeroServiceService} from './service/hero-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'js-cources';
  items = ['Apple iPhone', 'Huawei Mate', 'Samsung Galaxy'];
  x = 3;

  //currentHero: Hero;

  //heroes: Hero[];
  /*heroes: Hero[] = [{
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
  }];*/

  logger: LoggerService;
  heroService: HeroServiceService;

  constructor(logger: LoggerService/*, heroService: HeroServiceService*/) {
    this.logger = logger;
    //this.heroService = heroService;
    this.logger.trace('AppComponent init');
  }

  ngOnInit(): void {
    this.logger.trace('AppComponent ngOnInit');
    //this.heroes = this.heroService.findAll();
  }

  /*onSelect1(hero: Hero) {
    this.currentHero = hero;
  }*/
}
