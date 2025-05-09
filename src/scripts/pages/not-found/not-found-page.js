export default class NotFoundPage {
  async render() {
    return `
      <section class="not-found-container">
        <div class="not-found-content">
          <h1 class="not-found-title">404</h1>
          <p class="not-found-subtitle">Oops! Cannot find the page you are looking for.</p>
          <a href="#/" class="btn">Return to Homepage</a>
        </div>
      </section>
    `;
  }
}
