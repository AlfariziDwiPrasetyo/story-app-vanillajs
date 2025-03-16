import { parseActivePathname } from '../../routes/url-parser';
import * as StoryAPI from '../../data/api';
import StoryDetailPresenter from './story-detail-presenter';
import {
  generateLoaderAbsoluteTemplate,
  generateStoriesListErrorTemplate,
  generateStoryDetailTemplate,
} from '../../templates';

export default class StoryDetailPage {
  #presenter = null;
  #form = null;
  #map = null;

  async render() {
    return `
      <section>
        <div class="story-detail__container">
          <div id="story-detail" class="story-detail"></div>
          <div id="story-detail-loading-container"></div>
        </div>
      </section>
    `;
  }

  async afterRender() {
    this.#presenter = new StoryDetailPresenter(parseActivePathname().id, {
      view: this,
      apiModel: StoryAPI,
    });

    this.#presenter.showStoryDetail();
  }

  populateStoryDetail(story) {
    document.getElementById('story-detail').innerHTML = generateStoryDetailTemplate(story);
  }

  populateStoryDetailError(error) {
    document.getElementById('story-detail').innerHTML = generateStoriesListErrorTemplate(error);
  }

  showStoryDetailLoading() {
    document.getElementById('story-detail-loading-container').innerHTML =
      generateLoaderAbsoluteTemplate();
  }

  hideStoryDetailLoading() {
    document.getElementById('story-detail-loading-container').innerHTML = '';
  }
}
