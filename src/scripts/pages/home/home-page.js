export default class HomePage {
  async render() {
    return `
      <section class="container">
        <h1>Home Page</h1>
      </section>
    `;
  }

  async afterRender() {
    // Do your job here
  }

  // showLoading() {
  //   document.getElementById('reports-list-loading-container').innerHTML =
  //     generateLoaderAbsoluteTemplate();
  // }

  // hideLoading() {
  //   document.getElementById('reports-list-loading-container').innerHTML = '';
  // }
}
