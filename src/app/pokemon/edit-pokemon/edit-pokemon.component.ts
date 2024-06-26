import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../pokemon";
import { PokemonService } from "../pokemon.service";
import { ActivatedRoute } from "@angular/router";
import { PokemonFormComponent } from "../pokemon-form/pokemon-form.component";
import { NgIf } from "@angular/common";

@Component({
    selector: "app-edit-pokemon",
    template: ` <h2 class="text-center mt-5">Editer {{ pokemon?.name }}</h2>
    <p *ngIf="pokemon" class="text-center py-3">
      <img [src]="pokemon.picture" />
    </p>
    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>`,
    styles: ``,
    standalone: true,
    imports: [NgIf, PokemonFormComponent],
})
export class EditPokemonComponent implements OnInit {
  pokemon: Pokemon | undefined;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const pokemonId: string | null = this.route.snapshot.paramMap.get("id");
    if (pokemonId) {
      this.pokemonService
        .getPokemonById(+pokemonId)
        .subscribe((pokemon) => (this.pokemon = pokemon));
    } else {
      this.pokemon = undefined;
    }
  }
}
