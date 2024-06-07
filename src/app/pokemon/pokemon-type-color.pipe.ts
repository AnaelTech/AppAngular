import { Pipe, PipeTransform } from "@angular/core";

/*
 * Affiche la couleur correspondant au type du pokémon.
 * Prend en argument le type du pokémon.
 * Exemple d'utilisation:
 *   {{ pokemon.type | pokemonTypeColor }}
 */
@Pipe({
    name: "pokemonTypeColor",
    standalone: true
})
export class PokemonTypeColorPipe implements PipeTransform {
  transform(type: string): string {
    let color: string;

    switch (type) {
      case "Feu":
        color = "bg-danger";
        break;
      case "Eau":
        color = "bg-primary";
        break;
      case "Plante":
        color = "bg-success";
        break;
      case "Insecte":
        color = "bg-warning";
        break;
      case "Normal":
        color = "bg-secondary";
        break;
      case "Vol":
        color = "bg-info";
        break;
      case "Poison":
        color = "bg-danger";
        break;
      case "Fée":
        color = "bg-primary";
        break;
      case "Psy":
        color = "bg-secondary";
        break;
      case "Electrik":
        color = "bg-warning";
        break;
      case "Combat":
        color = "bg-danger";
        break;
      default:
        color = "bg-secondary";
        break;
    }

    return "chip " + color;
  }
}
