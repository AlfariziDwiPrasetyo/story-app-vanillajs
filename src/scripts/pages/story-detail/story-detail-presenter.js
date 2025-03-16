export default class StoryDetailPresenter {
  #storyId;
  #view;
  #apiModel;

  constructor(storyId, { view, apiModel }) {
    this.#storyId = storyId;
    this.#view = view;
    this.#apiModel = apiModel;
  }

  showStoryDetailMap() {
    //
  }

  showStoryDetail() {
    console.log(this.#storyId);
  }
}
