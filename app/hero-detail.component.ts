import { Hero } from './hero'
import { Component, Input } from '@angular/core'

@Component ({
  selector: "my-hero-detail",
  template: `

<div *ngIf = "hero">
     <div><label>{{ hero.name }} Details</label></div>
     <div>Id:{{ hero.id }}</div>
     <div>
       <label>name: </label>
       <input [(ngModel)] = "hero.name" placeholder="name">
     </div>
</div>
  `,
  styles:[
    ``

  ]
})

export class  HeroDetailComponent {
  @Input()
  hero: Hero
}
