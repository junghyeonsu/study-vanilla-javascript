import { $ } from "./utils/dom.js";
import {
  getRootNodesFromServer,
  getFolderNodesFromServer,
} from "./api/index.js";

import Node from "./components/Node.js";
import Breadcrumb from "./components/Breadcrumb.js";
import ImageModal from "./components/ImageModal.js";

class App {
  constructor() {
    this.app = $(".App");
    this.node = new Node();
    this.breadcrumb = new Breadcrumb();
    this.modal = new ImageModal();

    this.render();
    this.addEventListeners();
  }

  addEventListeners() {
    this.node.element.addEventListener(
      "click",
      this.handleClickNode.bind(this)
    );
  }

  async render() {
    this.node.element.innerHTML = this.renderLoading();
    const serverNodes = this.breadcrumb.isRoot()
      ? await getRootNodesFromServer()
      : await getFolderNodesFromServer(
          this.node.findFileIdByName(this.breadcrumb.getCurrentPath())
        );
    this.node.datas = serverNodes;
    this.node.element.innerHTML = serverNodes
      .map((node) =>
        node.type === "DIRECTORY"
          ? this.renderDirectory(node)
          : this.renderImage(node)
      )
      .join("");
  }

  async handleClickNode(event) {
    const clickedNodeId = event.target.id || event.target.parentNode.id;
    if (!clickedNodeId) return;

    if (clickedNodeId === "prev") {
      this.movePrevDirectory();
    } else if (this.node.checkFileOrImage(clickedNodeId) === "DIRECTORY") {
      this.moveDirectory(clickedNodeId);
    } else if (this.node.checkFileOrImage(clickedNodeId) === "FILE") {
      const filePath = this.node.findFilePathById(clickedNodeId);
      this.modal.showModalWithImage(filePath);
    }
  }

  async moveDirectory(clickedNodeId) {
    this.breadcrumb.addPath(this.node.findFileNameById(clickedNodeId));
    this.node.element.innerHTML = this.renderLoading();
    const serverNodes = await getFolderNodesFromServer(clickedNodeId);
    this.node.datas = serverNodes;
    this.node.element.innerHTML =
      this.renderPrevButton() +
      serverNodes
        .map((node) =>
          node.type === "DIRECTORY"
            ? this.renderDirectory(node)
            : this.renderImage(node)
        )
        .join("");
  }

  movePrevDirectory() {
    this.breadcrumb.popPath();
    this.render();
  }

  renderLoading() {
    return `<div>loading...</div>`;
  }

  renderDirectory(node) {
    return `
            <div id=${node.id} class="Node">
                <img src="./assets/directory.png">
                <div>${node.name}</div>
            </div>
        `;
  }

  renderImage(node) {
    return `
            <div id=${node.id} class="Node">
                <img src="./assets/file.png">
                <div>${node.name}</div>
            </div>
        `;
  }

  renderPrevButton() {
    return `
            <div id="prev" class="Node">
                <img src="./assets/prev.png">
            </div>
        `;
  }
}

export default App;
