import {Component} from 'angular2/core'
import {Hero} from './hero'
import {HeroDetailComponent} from './hero-detail.component'
import {HeroFormComponent} from './hero-form.component'
import {HeroService} from "./hero.service";
import {Inject} from "angular2/core";


@Component({
    directives: [HeroDetailComponent, HeroFormComponent],
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
<h2>My Heroes</h2>
<ul class="heroes">
    <li *ngFor="#hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
    </li>
</ul>
<my-hero-detail [hero]="selectedHero"></my-hero-detail>
<hero-form></hero-form>
    `,
    styles: [`
  .heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}
  .heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }
  .heroes li:hover {color: #369; background-color: #EEE; left: .2em;}
  .heroes .badge {
    font-size: small;
    color: white;
    padding: 0.1em 0.7em;
    background-color: #369;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -1px;
  }
  .selected { background-color: #EEE; color: #369; }
`]
})
export class AppComponent {

    public title : string;
    public selectedHero:Hero;
    public heroes : Hero [];

    constructor(heroService:HeroService, @Inject('app.config') config) {
        this.title = config.title;
        this.heroes = heroService.getHeroes();
    }


    onSelect(hero:Hero) {
        this.selectedHero = hero;
    }
}