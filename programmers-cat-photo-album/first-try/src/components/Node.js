import { $ } from "../utils/dom.js";

class Node {
  constructor() {
    this.element = $(".Nodes");
    this.datas = [];
  }

  findFileNameById(id) {
    return this.datas.filter((data) => id === data.id)[0].name;
  }

  findFileIdByName(name) {
    return this.datas.filter((data) => name === data.name)[0].id;
  }

  findFilePathById(id) {
    return this.datas.filter((data) => id === data.id)[0].filePath;
  }

  checkFileOrImage(id) {
    return this.datas.filter((data) => id === data.id)[0].type;
  }
}

export default Node;
