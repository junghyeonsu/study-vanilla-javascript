import { $ } from "../utils/dom.js";

class ImageModal {
  constructor() {
    this.element = $(".Modal");
    this.content = $(".content");
    this.element.style.display = "none";
    this.addEventListeners();
  }

  addEventListeners() {
    this.element.addEventListener("click", this.closeModal.bind(this));
    this.element.addEventListener("keypress", this.handleKeyPress.bind(this));
  }

  showModalWithImage(filePath) {
    const src = `https://fe-dev-matching-2021-03-serverlessdeploymentbuck-t3kpj3way537.s3.ap-northeast-2.amazonaws.com/public${filePath}`;
    this.content.innerHTML = `<img src=${src} alt="cat" />`;
    this.element.style.display = "block";
  }

  handleKeyPress(e) {
    if (e.key === "Escape") this.closeModal();
  }

  closeModal() {
    this.element.style.display = "none";
  }
}

export default ImageModal;
