import {Hero} from './hero'
import {HEROES} from './mock-heroes'
import {Injectable} from "angular2/core";

@Injectable()
export class HeroService {
    heroes: Hero [];

    constructor(){
        this.heroes = HEROES;
    }

    getHeroes(){
        return this.heroes;
    }
}
