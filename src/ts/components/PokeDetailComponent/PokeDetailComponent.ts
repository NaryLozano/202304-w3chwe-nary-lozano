import Component from "../Component/Component.js";
import { type PokeStructure } from "../PokeCardComponent/types.js";

const urlParams = new URLSearchParams(window.location.search);
const pokemonId = urlParams.get("id");

class PokeDetailComponent extends Component {
  constructor(parentElement: HTMLElement) {
    super(parentElement, "poke-detail", "div");
    this.renderHtml();
  }

  renderHtml(): void {
    this.domElement.innerHTML = `
    <div class = "poke-card__image-container">
    <a href="./poke-detail.html"><img class = https://thumbs.dreamstime.com/b/abstract-pikachu-face-design-illustration-abstract-pikachu-face-design-illustration-abstract-designs-illustrator-cartoon-139526251.jpg" alt="" /></a>  
    </div>
    <div class = "poke-card__data-container">
      <h2 class = "poke-card__name">meow</h2>
      <ul class = "poke-card__data-list">
        <li class = "poke-card__type">holi</li>
      </ul>
    </div>
    `;
    console.log(urlParams);
  }
}
export default PokeDetailComponent;
