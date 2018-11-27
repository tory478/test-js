import {Component, OnInit} from '@angular/core';
import {LoggerService} from './service/logger.service';
import {Hero} from './domain/domain.hero';
import {HeroServiceService} from './service/hero-service.service';
import {HeroHttpService} from './service/hero-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'js-cources';
  items = ['Apple iPhone', 'Huawei Mate', 'Samsung Galaxy'];
  x = 3;

  heroes: Hero[] = [];

  logger: LoggerService;

  constructor(logger: LoggerService, private heroService: HeroServiceService, private heroHttpService: HeroHttpService) {
    this.logger = logger;
    this.heroService = heroService;
    this.logger.trace('AppComponent init');
  }

  ngOnInit(): void {
    this.logger.trace('AppComponent ngOnInit');
    this.heroHttpService.findAll().subscribe(x => this.heroes = x);
  }
}
