const IMAGE_PATH_PREFIX =
  'https://fe-dev-matching-2021-03-serverlessdeploymentbuck-t3kpj3way537.s3.ap-northeast-2.amazonaws.com/public';

function ImageView({ $app, initialState }) {
  this.state = initialState;
  this.$target = document.createElement('div');
  this.$target.className = 'Modal ImageView';

  this.$input = document.createElement('input');
  this.$input.type = 'text';
  // this.$input.style.display = 'none';
  this.$target.appendChild(this.$input);

  $app.appendChild(this.$target);

  this.setState = nextState => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    this.$target.innerHTML = `<div class="content">${
      this.state ? `<img src="${IMAGE_PATH_PREFIX}${this.state}">` : ''
    }</div>`;

    this.$target.style.display = this.state ? 'block' : 'none';
  };

  this.$target.addEventListener('click', e => {
    if (e.target.className === 'Modal ImageView') {
      this.state = null;
      this.render();
    }
  });

  this.render();
}

export default ImageView;
