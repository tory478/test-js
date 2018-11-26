import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../domain/domain.hero';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  @Input('hero')
  currentHero: Hero;

  constructor() {
  }

  ngOnInit() {
  }

}
