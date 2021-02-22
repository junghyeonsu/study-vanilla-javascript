import TodoList from "./TodoList.js";
import TodoListForm from "./TodoListForm.js";

export default class Todo {
  constructor($target) {
    const todo = document.createElement("div");

    new TodoList(todo);
    new TodoListForm(todo);

    $target.appendChild(todo);
  }
}
