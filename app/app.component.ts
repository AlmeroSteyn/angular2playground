import {Component} from 'angular2/core'
import {Hero} from './hero'
import {HeroDetailComponent} from './hero-detail.component'
import {HeroFormComponent} from './hero-form.component'
import {HeroService} from "./hero.service";
import {Inject} from "angular2/core";


@Component({
    directives: [HeroDetailComponent, HeroFormComponent],
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
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
