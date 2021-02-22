import Title from "./components/Title.js";
import Header from "./components/header/Header.js";
import Todo from "./components/list/Todo.js";

export default class App {
  state = "Todo";
  app = document.createElement("div");
  constructor($target) {
    this.app.style = `
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
    `;

    this.render();
    $target.append(this.app);
  }

  render = () => {
    console.log(this.state);

    new Title(this.app);
    new Header(document.querySelector("#root"));
    new Todo(this.app);
  };
}
