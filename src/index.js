import { newCard } from "./PokemonCard.js";
import { cardContainer } from "./cardContainer.js"

document.getElementById("form").addEventListener("submit", (e) => newCard(e));
document.getElementById("clear-button").addEventListener("click", () => {
  document.getElementById("card-container").innerHTML = "";
  cardContainer.cards = {}
});
document.getElementById("sort-height").addEventListener("click", cardContainer.sortByHeight);
document.getElementById("sort-weight").addEventListener("click", cardContainer.sortByWeight);
document.getElementById("sort-hp").addEventListener("click", cardContainer.sortByHp)