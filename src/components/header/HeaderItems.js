import Item from "./Item.js";

export default class HeaderItems {
  constructor($target) {
    const $container = document.createElement("div");
    $container.style = `
        display: flex;
        height: 100%;
        width: 100%;
        justify-content: space-evenly;
        align-items: center;
    `;

    new Item($container, "Todo");
    new Item($container, "Default");
    $target.appendChild($container);
  }
}
