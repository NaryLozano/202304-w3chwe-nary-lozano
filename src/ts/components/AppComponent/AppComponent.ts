import ButtonPaginationComponent from "../ButtonPaginationComponent/ButtonPaginationComponent.js";
import Component from "../Component/Component.js";
import HeaderComponent from "../HeaderComponent/HeaderComponent.js";
import PokemonListComponent from "../PokemonListComponent/PokemonListComponent.js";

class AppComponent extends Component {
  constructor(parentElement: HTMLElement) {
    super(parentElement, "container", "div");

    this.renderHtml();
  }

  renderHtml(): void {
    new HeaderComponent(this.domElement);
    const pokelist = new PokemonListComponent(this.domElement);
    const main: HTMLElement = document.querySelector(".container")!;
    new ButtonPaginationComponent(main);
    const nextBtn = document.querySelector(".button-pagination__btn--next");
    nextBtn?.addEventListener("click", () => {
      pokelist.getNextPage();
    });
    const previousBtn = document.querySelector(
      ".button-pagination__btn--previous"
    );
    previousBtn?.addEventListener("click", () => {
      pokelist.getPreviousPage();
    });
  }
}
export default AppComponent;
