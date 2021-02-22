import { setState } from "../../App.js";

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

    const $todo = document.createElement("div");
    $todo.innerHTML = "Todo";
    $todo.addEventListener("click", onClickItem);

    const $default = document.createElement("div");
    $default.innerHTML = "Default";
    $default.addEventListener("click", onClickItem);

    $container.appendChild($todo);
    $container.appendChild($default);

    $target.appendChild($container);
  }
}

const onClickItem = (e) => {
  setState(e.target.innerHTML);
};
