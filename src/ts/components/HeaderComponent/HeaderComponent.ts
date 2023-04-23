import Component from "../Component/Component.js";

class HeaderComponent extends Component {
  constructor(parentElement: HTMLElement) {
    super(parentElement, "main-header", "header");
    this.renderHtml();
  }

  renderHtml(): void {
    this.domElement.innerHTML = `
    <img src="./images/pokemon-logo.svg" alt="pokemooon" />
      <nav class = "navbar">
        <ul class = navbar__list>
          <li class = navbar__item><a href="index.html">Home</a></li>
          <li class = navbar__item><a href="">My Pokemon</a></li>
        </ul>
      </nav>`;
  }
}

export default HeaderComponent;
