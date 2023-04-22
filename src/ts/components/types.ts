interface ComponentStructure {
  domElement: HTMLElement;
  renderHtml: () => void;
  addListeners?: () => void;
}

export default ComponentStructure;
