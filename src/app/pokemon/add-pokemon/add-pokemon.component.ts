import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../pokemon";

@Component({
  selector: "app-add-pokemon",
  template: ` <h2 class="text-center mt-3">Add pokemon</h2>
    <app-pokemon-form [pokemon]="pokemon"></app-pokemon-form>`,
})
export class AddPokemonComponent implements OnInit {
  pokemon: Pokemon;

  ngOnInit() {
    this.pokemon = new Pokemon();
  }
}
