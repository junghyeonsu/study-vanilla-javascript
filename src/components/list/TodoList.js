import ListItem from "./ListItem.js";

export default class TodoList {
  constructor($target) {
    const list = document.createElement("ul");

    new ListItem("첫번째 리스트입니다.", list);

    $target.appendChild(list);
  }
}
