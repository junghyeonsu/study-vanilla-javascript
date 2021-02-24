export default class Modal {
  constructor($target) {
    this.$modalWrapper = document.createElement("div");
    this.$modalWrapper.className = "modal";
    this.$modalWrapper.classList.add("modal_hidden");

    this.$modalOverlay = document.createElement("div");
    this.$modalOverlay.className = "modal_overlay";
    this.$modalOverlay.addEventListener("click", this.closeModal);

    this.$modalContent = document.createElement("section");
    this.$modalContent.className = "modal_content";
    this.$modalContent.innerHTML = "모달입니다.";

    this.$modalOverlay.appendChild(this.$modalContent);
    this.$modalWrapper.appendChild(this.$modalOverlay);
    $target.appendChild(this.$modalWrapper);
  }

  closeModal() {
    const modal = document.querySelector(".modal");
    modal.classList.toggle("modal_hidden");
  }
}
