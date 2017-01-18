import { Hero } from './hero'
// Keep the Input import for now, we'll remove it later:
import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { Location } from '@angular/common'

import { HeroService } from './hero.service';
import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls:['hero-detail.component.css']
})


export class HeroDetailComponent implements OnInit {

  constructor(
    private heroService : HeroService,
    private route: ActivatedRoute,
  private location: Location
  ) { }

  ngOnInit(): void{
    this.route.params
    .switchMap((params: Params)=>  this.heroService.getHero(+params['id']))
    .subscribe(hero =>  this.hero = hero )
  }
  @Input()

  hero: Hero

  //Going back too far could take us out of the application.
  // That's acceptable in a demo. We'd guard against it in a real application, perhaps with the CanDeactivate guard.

  save():void {
    this.heroService.update(this.hero)
    .then(() => this.goBack())
  }

  goBack(): void {
    this.location.back();
  }

}
