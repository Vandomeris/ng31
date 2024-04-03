import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { NgClass, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [UpperCasePipe, FormsModule, NgClass, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent implements OnInit {

  constructor (private heroService: HeroService){}

  heroes: Hero[] = []

  selectedHero?: Hero

  selectHero(hero: Hero){
    this.selectedHero = hero
  }

  getHeroes(){
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }

  ngOnInit(): void {
    this.getHeroes()
  }

}
