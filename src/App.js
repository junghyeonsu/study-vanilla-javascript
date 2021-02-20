import Title from "./components/Title.js";
import TodoList from "./components/list/TodoList.js";

export default class App {
  constructor($target) {
    let app = document.createElement("div");
    app.style = `
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
    `;

    new Title(app);
    new TodoList(app);
    $target.append(app);
  }
}
