export default class Title {
  constructor($target) {
    const $h1 = document.createElement("h1");
    $h1.innerText = "샘플 프로젝트";
    $h1.style = `
      color: red;
    `;

    $target.appendChild($h1);
  }
}
