import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../domain/domain.hero';
import {HeroServiceService} from '../service/hero-service.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {HeroHttpService} from '../service/hero-http.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  currentHero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroServiceService,
    private heroHttpService: HeroHttpService,
    private location: Location
  ) {
  }

  /*ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id');
      this.currentHero = this.heroService.find(id);
    });
  }*/
  ngOnInit() {
    console.log('HeroDetailsComponent.ngOnInit');
    this.getCurrentHero();
  }

  getCurrentHero() {

    this.route.paramMap.subscribe(x => {
      const id = +x.get('id');
      this.heroHttpService.getHero(id).subscribe(x => this.currentHero = x);
      // this.currentHero = this.heroService.getHero(id).su;
      console.log(id);
      console.log(this.currentHero);
    });
    // const id = +this.route.snapshot.paramMap.get('id');
    // this.heroService.getHeroAsync(id)
    //   .subscribe(hero => this.currentHero = hero);

  }


}
