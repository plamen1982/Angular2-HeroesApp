import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'

import { HeroSearchService } from './hero-search.service'
import { Hero } from './hero'

@Component({
  moduleId:module.id,
  selector: 'hero-search',
  templateUrl: 'hero-search.component.html',
  stylesUrls:['hero-search.component.css'],
  providers:[HeroSearchService]
})

export class HeroSearchComponent implements OnInit {}
