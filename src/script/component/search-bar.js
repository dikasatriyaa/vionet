class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this.eventClick = event;
    this.render();
  }

  get value() {
    return this.querySelector('#searchElement').value;
  }

  render() {
    this.innerHTML = `
        <form class="d-flex" role="search" id="searchMovie">
          <input class="form-control me-2 search" id="searchElement" type="search" placeholder="Search" aria-label="Search" style="border-color: white; color: white;">
          <button class="btn btn-warning" type="submit" id="searchButton">Search</button>
        </form>
      `;
    this.querySelector('#searchMovie').addEventListener('submit', this.eventClick);
  }
}

customElements.define('search-bar', SearchBar);
