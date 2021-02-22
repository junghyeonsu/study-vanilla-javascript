import { setState } from "../../App.js";

export default class Item {
  constructor($target, $text) {
    const $item = document.createElement("div");
    $item.innerHTML = $text;
    $item.addEventListener("click", onClickItem);
    $target.appendChild($item);
  }
}

const onClickItem = (e) => {
  setState(e.target.innerHTML);
};
