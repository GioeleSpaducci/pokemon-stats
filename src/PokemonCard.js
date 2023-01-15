import { cardContainer } from "./cardContainer.js";
import { typesColours } from "./typesColours.js";

//create card object and ui element
export default class PokemonCard {
  constructor(pokeJson) {
    this.name = pokeJson.name;
    this.hp = pokeJson.stats[0].base_stat;
    this.height = pokeJson.height;
    this.weight = pokeJson.weight;
    this.sprite = pokeJson.sprites.front_default;
    this.type = pokeJson.types.map((elem) => elem.type.name)
      .join("/");
  }
  render() {
    document.getElementById("card-container").innerHTML +=
      `<div  class="pokemon-card" id="${this.name}" style="background-color:${typesColours[this.type.split("/")[0]]}">
            <button class="delete-button">x</button>
            <img src="${this.sprite}">
            <ul class="stats">
                <li>
                    <div>Name</div>
                    <div>${this.name}</div>
                </li>
                <li>
                    <div>Type</div>
                    <div>${this.type}</div>
                </li>
                <li>
                    <div>HP</div>
                    <div>${this.hp}</div>
                </li>
                <li>
                    <div>Height</div>
                    <div>${this.height}</div>
                </li>
                <li>
                    <div>Weight</div>
                    <div>${this.weight}</div>
                </li>
            </ul>
        </div>`;
  }
}

async function newCard(e) {
  e.preventDefault();
  const pokemon = document.getElementById("search-bar").value.toLowerCase();
  const url = "https://pokeapi.co/api/v2/pokemon/" + pokemon;
  //load data from api
  const pokeJson = await fetch(url).then(response => response.json());
  cardContainer.cards[pokemon] = new PokemonCard(pokeJson);
  cardContainer.cards[pokemon].render();
  let buttons = document.getElementsByClassName("delete-button")
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", deleteCard)
  };
}

function deleteCard(e) {
  const pokemon = e.target.parentNode;
  delete cardContainer.cards[pokemon.id];
  pokemon.remove();
}

export { newCard, deleteCard };