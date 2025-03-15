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
    const response = await getAllStories();
    console.log(response);
  }
}
