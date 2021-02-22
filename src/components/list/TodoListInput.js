import { onAddHandler } from "./TodoListButton.js";

export default class TodoListInput {
  constructor($target) {
    const input = document.createElement("input");
    input.type = "text";
    input.className = "todo_input";
    $target.appendChild(input);

    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        onAddHandler(e);
      }
      return;
    });
  }
}
