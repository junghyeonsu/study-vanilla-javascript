import HeaderItems from "./HeaderItems.js";

export default class Header {
  constructor($target) {
    const header = document.createElement("header");
    header.style = `
        position: sticky;
        top: 0;
        left: 0;
        width: 100%;
        height: 50px;
        background-color: gray;
    `;

    new HeaderItems(header);
    $target.appendChild(header);
  }
}
