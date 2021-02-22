import { setState } from "../../App.js";

export default class Item {
  constructor($target, $text) {
    const $item = document.createElement("div");
    $item.innerHTML = $text;
    $item.addEventListener("click", onClickItem);
    $item.addEventListener("mouseover", () => {
      $item.style = `
            color: red;
        `;
    });
    $item.addEventListener("mouseleave", () => {
      $item.style = `
            color: white;
        `;
    });

    $target.appendChild($item);
  }
}

const onClickItem = (e) => {
  setState(e.target.innerHTML);
};
