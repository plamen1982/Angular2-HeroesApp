import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'


import { HeroSearchService } from './hero-search.service'
import { Hero } from './hero'

// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  moduleId:module.id,
  selector: 'hero-search',
  templateUrl: 'hero-search.component.html',
  stylesUrls:['hero-search.component.css'],
  providers:[HeroSearchService]
})

export class HeroSearchComponent implements OnInit {

  heroes: Observable<Hero[]>
  private searchTerms = new Subject<string>()

  constructor(
    private heroSearchService :HeroSearchService,
    private router :Router) { }

  search(term: string): void {
    this.searchTerms.next(term)
  }
  ngOnInit(): void {
    this.heroes = this.searchTerms
    .debounceTime(300) //wait for 300ms pause in events
    .distinctUntilChanged() //ignore if next term search is like previous
    .switchMap(term => term //switch to new observable each time)
    //return http search observable
    ? this.heroSearchService.search(term)
        //or the observable of empty heroes if no search term
      :Observable.of<Hero[]>([]))
      .catch(error => {
        //TODO: real error handling
        console.log(error);
        return Observable.of<Hero[]>([]);
      })
  }
  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id]
    this.router.navigate(link)
  }
}


