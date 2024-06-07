import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Pokemon } from "../pokemon";
import {
  Observable,
  Subject,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from "rxjs";
import { PokemonService } from "../pokemon.service";
import { NgFor, AsyncPipe } from "@angular/common";

@Component({
  selector: "app-search-pokemon",
  templateUrl: "./search-pokemon.component.html",
  standalone: true,
  imports: [NgFor, AsyncPipe],
})
export class SearchPokemonComponent implements OnInit {
  //flux de donnée dans le temps
  searchTerm = new Subject<string>();
  pokemons$: Observable<Pokemon[]>;

  constructor(private router: Router, private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemons$ = this.searchTerm.pipe(
      debounceTime(300),

      distinctUntilChanged(),
      //attends un changment dans le term de recherche
      switchMap((term) => this.pokemonService.searchPokemonList(term))
    );
  }

  search(term: string) {
    this.searchTerm.next(term);
  }

  goToDetail(pokemon: Pokemon) {
    const link = ["/pokemon", pokemon.id];
    this.router.navigate(link);
  }
}
