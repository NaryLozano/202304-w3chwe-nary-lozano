import Component from "../Component/Component.js";

class ButtonPaginationComponent extends Component {
  constructor(
    parentElement: HTMLElement,
    public previous: string,
    public next: string
  ) {
    super(parentElement, "button-pagination", "div");
    this.renderHtml();
  }

  renderHtml(): void {
    this.domElement.innerHTML = `
      <button class = "button-pagination__btn">Previous</button>
      <button class = "button-pagination__btn">Next</button>`;
  }
}

export default ButtonPaginationComponent;
