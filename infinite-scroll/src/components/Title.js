export default class Title {
  constructor($target, $text) {
    const $h1 = document.createElement("h1");
    $h1.innerText = $text;
    $target.appendChild($h1);
  }
}
