import Component from "../Component/Component.js";

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
  }
}
export default AppComponent;
