import { $ } from "../utils/dom.js";

class Breadcrumb {
  constructor() {
    this.element = $(".Breadcrumb");
    this.currentPaths = ["root"];
  }

  isRoot() {
    return this.currentPaths[this.currentPaths.length - 1] === "root";
  }

  getCurrentPath() {
    return this.currentPaths[this.currentPaths.length - 1];
  }

  addPath(path) {
    this.currentPaths.push(path);
    this.render();
  }

  popPath() {
    this.currentPaths.pop();
    this.render();
  }

  render() {
    this.element.innerHTML = this.currentPaths
      .map((path) => `<div>${path}</div>`)
      .join("");
  }
}

export default Breadcrumb;
