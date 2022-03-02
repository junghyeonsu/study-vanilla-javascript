export default class TodoListButton {
  constructor($target) {
    const $button = document.createElement("button");

    $button.addEventListener("click", onAddHandler);

    $button.innerHTML = "투두 달기";

    $target.appendChild($button);
  }
}

export const onAddHandler = (e) => {
  e.preventDefault();
  const $list = document.querySelector(".todo_list");
  const $li = document.createElement("li");
  const $input = document.querySelector(".todo_input");

  const $delButton = document.createElement("button");
  $delButton.innerHTML = "X";
  $delButton.style = `color: red;`;
  $delButton.addEventListener("click", () => {
    $list.removeChild($li);
  });

  $li.append($input.value);
  $li.append($delButton);
  $list.appendChild($li);

  $input.value = "";
  $input.focus();
};
