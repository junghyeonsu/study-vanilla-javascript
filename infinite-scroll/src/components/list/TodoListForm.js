import TodoListInput from "./TodoListInput.js";
import TodoListButton from "./TodoListButton.js";

export default class TodoListForm {
  constructor($target) {
    const form = document.createElement("form");

    new TodoListInput(form);
    new TodoListButton(form);

    $target.appendChild(form);
  }
}
