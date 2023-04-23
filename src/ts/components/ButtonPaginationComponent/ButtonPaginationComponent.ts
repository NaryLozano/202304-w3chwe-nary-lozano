import Component from "../Component/Component.js";

class ButtonPaginationComponent extends Component {
  constructor(parentElement: HTMLElement) {
    super(parentElement, "button-pagination", "div");
    this.renderHtml();
  }

  renderHtml(): void {
    this.domElement.innerHTML = `
      <button class = "button-pagination__btn--previous">Previous</button>
      <button class = "button-pagination__btn--next">Next</button>`;
  }
}

export default ButtonPaginationComponent;
