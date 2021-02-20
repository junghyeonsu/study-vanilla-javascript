export default class ListItem {
  constructor($text, $target) {
    const listItem = document.createElement("li");
    listItem.innerHTML = $text;

    $target.appendChild(listItem);
  }
}
