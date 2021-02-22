import Title from "./components/Title.js";
import Header from "./components/header/Header.js";
import Todo from "./components/list/Todo.js";

let state = "Todo";
const app = document.createElement("div");

export default class App {
  constructor($target) {
    app.style = `
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
    `;

    render();
    new Header(document.querySelector("#root"));
    $target.append(app);
  }
}

export const render = () => {
  while (app.hasChildNodes()) {
    app.removeChild(app.firstChild);
  }

  switch (state) {
    case "Todo":
      new Title(app, "To do list");
      new Todo(app);
      break;
    default:
      app.innerHTML = "default";
  }
};

export const setState = (_state) => {
  state = _state;
  render();
};
