import { Component } from "@angular/core";
import { RouterModule, RouterLink } from "@angular/router";

@Component({
    selector: "app-page-not-found",
    template: ` <div class="text-center">
    <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png" />
    <h1>Hey, cette page n'existe pas !</h1>
    <button type="button" class="btn btn-success">
      <a routerLink="/pokemons" class="text-decoration-none text-white">
        Retourner à l' accueil
      </a>
    </button>
  </div>`,
    styles: ``,
    standalone: true,
    imports: [RouterLink],
})
export class PageNotFoundComponent {}
