import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { POKEMONS } from "../mock-pokemons-list";
import { Pokemon } from "../pokemon";

@Component({
  selector: "app-detail-pokemon",
  templateUrl: "./detail-pokemon.component.html",
})
export class DetailPokemonComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;
  pokemon: Pokemon | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.pokemonList = POKEMONS;
    const pokemonId: string | null = this.route.snapshot.paramMap.get("id");
    if (pokemonId) {
      this.pokemon = this.pokemonList.find(
        (pokemon) => pokemon.id == +pokemonId
      );
    }
  }
  goBack() {
    this.router.navigate(["/pokemons"]);
  }
}
