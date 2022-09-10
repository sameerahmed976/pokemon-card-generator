import { getElement } from "./utils/getElement.js";
import { getFetch } from "./utils/getFetch.js";

const submitButton = getElement(".btn");
const cardContainer = getElement(".card-content");
const randomNumber = Math.floor(Math.random() * 400 + 1);
const url = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;

const gradient = getElement(".card-image");

const cardImageGradientColors = [
  " radial-gradient( circle farthest-corner at 92.3% 71.5%,  rgba(83,138,214,1) 0%, rgba(134,231,214,1) 90% )",
  "radial-gradient( circle farthest-corner at 10% 20%,  rgba(151,10,130,1) 0%, rgba(33,33,33,1) 100.2% )",
  "linear-gradient( 109.6deg,  rgba(51,236,236,1) 11.2%, rgba(24,39,231,1) 91.1% )",
  "radial-gradient( circle 848px at 10% 20%,  rgba(174,231,165,0.90) 0%, rgba(181,205,154,1) 90% )",
  "linear-gradient( 109.6deg,  rgba(8,8,247,0.91) 12.7%, rgba(250,5,5,0.91) 92.2% )",
  "linear-gradient( 109.6deg,  rgba(8,8,247,0.91) 12.7%, rgba(250,5,5,0.91) 92.2% )",
  "radial-gradient( circle farthest-corner at 10% 20%,  rgba(53,144,187,1) 0%, rgba(60,130,208,1) 90% )",
];

const displayCard = async () => {
  const data = await getFetch(url);
  //   console.log(
  //     "🚀 ~ file: script.js ~ line 14 ~ submitButton.addEventListener ~ data",
  //     data
  //   );
  displayPokemon(data);
};

const displayPokemon = (data) => {
  cardContainer.innerHTML = ` <img src=${
    data.sprites.other.dream_world.front_default
  } alt="pokemon" class="card-image"  />
        <h1 class="card-name">Name : ${data.name}</h1>
        <h2 class="card-hp">hp : ${data.stats[0].base_stat}</h2>
        <h3 class="card-attacks">Abilities :  ${data.abilities
          .map((d) => {
            return `<p class="ability" >${d.ability.name}</p>`;
          })
          .join(" ")}</h3>
        <h4 class="card-type">Type : ${data.types[0].type.name} </h4>
        <h5 class="card-attack">Attack : ${data.stats[1].base_stat}</h5>
        <h6 class="card-speed">Speed : ${data.stats[5].base_stat}</h6>
        <h6 class="card-defense">Defense : ${data.stats[2].base_stat}</h6>`;
};

const generateCard = async () => {
  //   console.log("click");
  const randomNumber = Math.floor(Math.random() * 400 + 1);
  const url = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;
  const data = await getFetch(url);
  //   console.log(
  //     "🚀 ~ file: script.js ~ line 14 ~ submitButton.addEventListener ~ data",
  //     data
  //   );
  displayPokemon(data);
};

window.addEventListener("load", displayCard);
submitButton.addEventListener("click", generateCard);
