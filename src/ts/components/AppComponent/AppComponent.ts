import Component from "../Component/Component.js";
import PokemonListComponent from "../PokemonListComponent/PokemonListComponent.js";

class AppComponent extends Component {
  constructor(parentElement: HTMLElement) {
    super(parentElement, "container", "div");

    this.renderHtml();
  }

  renderHtml(): void {
    this.domElement.innerHTML = `
    <header class = "main-header">
    <img src="./images/pokemon-logo.svg" alt="pokemooon" />
      <nav class = "navbar">
        <ul class = navbar__list>
          <li class = navbar__item><a href="index.html">Home</a></li>
          <li class = navbar__item><a href="">My Pokemon</a></li>
        </ul>
      </nav>
    </header>
    <main class = "main"></main>`;

    const mainContainer: HTMLElement = this.domElement.querySelector(".main")!;

    new PokemonListComponent(mainContainer);
  }
}
export default AppComponent;
