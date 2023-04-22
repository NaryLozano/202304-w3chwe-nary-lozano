import Component from "../Component/Component.js";

class PokeCardComponent extends Component {
  constructor(parentElement: HTMLElement, private readonly pokemon: string) {
    super(parentElement, "poke-card", "li");
    this.renderHtml();
  }

  renderHtml(): void {
    this.domElement.innerHTML = `
    <div class = "poke-card__image">
      <img src="" alt="" />
    </div>
    <div class = "poke-card__data-container">
      <h2 class = "poke-card__name">miau</h2>
      <ul class = "poke-card__data-list">
        <li class = "poke-card__type">fire</li>
        <li class = "poke-card__species">plant</li>
      </ul>
    </div>
    `;
  }
}

export default PokeCardComponent;
