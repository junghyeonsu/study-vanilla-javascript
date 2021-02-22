import Card from "./Card.js";

export default class CardContainer {
  constructor($target) {
    const $container = document.createElement("div");
    new Card($target);
    new Card($target);
    new Card($target);
    new Card($target);

    $target.appendChild($container);
  }
}
