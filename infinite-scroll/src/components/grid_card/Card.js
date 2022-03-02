export default class Card {
  constructor($target) {
    const $card = document.createElement("article");
    $card.innerHTML = "Card";
    $card.style = `
        display: flex;
        background-color: #efefef;
        width: 200px;
        height: 200px;
        margin: 6px;
        justify-content: center;
        align-items: center;
    `;
    $card.addEventListener("click", this.toggleCard);

    $target.appendChild($card);
  }

  toggleCard() {
    const modal = document.querySelector(".modal");
    modal.classList.toggle("modal_hidden");
  }
}
