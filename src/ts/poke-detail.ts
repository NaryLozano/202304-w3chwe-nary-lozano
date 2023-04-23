import AppComponent from "./components/AppComponent/AppComponent.js";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent.js";
import PokeDetailComponent from "./components/PokeDetailComponent/PokeDetailComponent.js";

const container: HTMLElement = document.querySelector(".Poke-details")!;

new HeaderComponent(container);
new PokeDetailComponent(container);
