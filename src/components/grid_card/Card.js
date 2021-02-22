export default class Card {
  constructor($target) {
    const $card = document.createElement("div");
    $card.innerHTML = "Card";
    $card.style = `
        display: flex;
        background-color: #efefef;
        width: 200px;
        height: 200px;
        justify-content: center;
        align-items: center;
    `;

    $target.appendChild($card);
  }
}
