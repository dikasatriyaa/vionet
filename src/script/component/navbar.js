class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  get value() {
    return this.querySelector('#searchElement').value;
  }

  render() {
    this.innerHTML = `
        <div class="container">
        <a class="navbar-brand"><h2 class="display-5 fw-bold">VIO<span style="color: rgb(232, 183, 8);">NET</span></h2></a>
        <search-bar></search-bar>
      </div>
      `;
  }
}

customElements.define('nav-bar', NavBar);
