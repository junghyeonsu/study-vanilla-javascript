export default class TodoList {
  constructor($target) {
    const $list = document.createElement("ul");
    $list.className = "todo_list";

    $target.appendChild($list);
  }
}
