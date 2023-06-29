class Cover extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="container" id="cover">
        <div class="p-5 mt-2">
            <div class="container-fluid py-5 jumbotron" id="jumbotron">
              <h1 class="display-5 fw-bold">Hilman's Wife's</h1>
              <h1 class="display-5 fw-bold">Bodyguard</h1>
              <p class="col-md-8 fs-4">Releasing 10 April</p>
            </div>
          </div>
        </div>
        `;
  }
}

customElements.define('my-cover', Cover);
