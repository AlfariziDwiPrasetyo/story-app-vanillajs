import * as StoryAPI from '../../data/api';
import { storyMapper } from '../../data/api-mapper';
import {
  generateLoaderAbsoluteTemplate,
  generateStoriesListEmptyTemplate,
  generateStoriesListErrorTemplate,
  generateStoryItemTemplate,
} from '../../templates';
import HomePresenter from './home-presenter';

export default class HomePage {
  #presenter = null;
  #map = null;

  async render() {
    return `
      <section class="container">
        <h1 class="tag-line">Stories</h1>
      </section>

      <section class="container">
        <div class="story-list__container">
          <div id="story-list" class="story-list__item-container"></div>
          <div id="story-list-loading-container"></div>
        </div>
      </section>
    `;
  }

  async afterRender() {
    this.#presenter = new HomePresenter({
      view: this,
      model: StoryAPI,
    });

    await this.#presenter.initialGallery();
  }

  populateStoriesList(stories) {
    if (stories.length <= 0) {
      this.populateStoriesEmpty();
      return;
    }

    const html = stories.reduce((accumulator, story) => {
      return accumulator.concat(generateStoryItemTemplate(story));
    }, '');

    document.getElementById('story-list').innerHTML = `
      <div class="story-list">${html}</div>
    `;
  }

  showLoading() {
    document.getElementById('story-list-loading-container').innerHTML =
      generateLoaderAbsoluteTemplate();
  }

  hideLoading() {
    document.getElementById('story-list-loading-container').innerHTML = '';
  }

  populateStoriesListError(message) {
    document.getElementById('story-list').innerHTML = generateStoriesListErrorTemplate(message);
  }

  populateStoriesEmpty() {
    document.getElementById('story-list').innerHTML = generateStoriesListEmptyTemplate();
  }
}
