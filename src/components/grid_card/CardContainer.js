import Card from "./Card.js";

export default class CardContainer {
  constructor($target) {
    const $container = document.createElement("section");
    $container.style = `
      display: inline-flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      align-items: center;
    `;
    new Card($container);
    new Card($container);
    new Card($container);
    new Card($container);

    $target.appendChild($container);
  }
}
