const count = 20;
let index = 0;

export default class InfiniteScroll {
  constructor($target) {
    this.items = document.createElement("div");
    this.items.id = "items";

    this.sentinel = document.createElement("p");
    this.sentinel.id = "sentinel";

    this.io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        this.loadItems();
      });
    });

    $target.appendChild(this.items);
    $target.appendChild(this.sentinel);

    this.io.observe(document.getElementById("sentinel"));
    this.loadItems();
  }

  loadItems() {
    const fragment = document.createDocumentFragment();

    for (let i = index + 1; i <= index + count; ++i) {
      const item = document.createElement("p");

      item.classList.add("item");
      item.textContent = `#${i}`;

      fragment.appendChild(item);
    }

    document.getElementById("items").appendChild(fragment);
    index += count;
  }
}
