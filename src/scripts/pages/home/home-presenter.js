import { getAllStories } from '../../data/api';

export default class HomePresenter {
  #view;
  #model;

  constructor({ model, view }) {
    this.#model = model;
    this.#view = view;
  }

  async initialGallery() {
    this.#view.showLoading();
    try {
      const response = await getAllStories();
      this.#view.populateStoriesList(response.listStory);
    } catch (error) {
      console.error('initialGallery: error:', error);
      this.#view.populateStoriesListError(error.message);
    } finally {
      this.#view.hideLoading();
    }
  }
}
