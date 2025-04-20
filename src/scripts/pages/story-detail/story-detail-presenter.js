import { getStoryById } from '../../data/api';
import { storyMapper } from '../../data/api-mapper';

export default class StoryDetailPresenter {
  #storyId;
  #view;
  #apiModel;

  constructor(storyId, { view, apiModel }) {
    this.#storyId = storyId;
    this.#view = view;
    this.#apiModel = apiModel;
  }

  async showStoryDetailMap() {
    this.#view.showMapLoading();
    try {
      await this.#view.initialMap();
    } catch (error) {
      console.error('showStoryDetailMap: error:', error);
    } finally {
      this.#view.hideMapLoading();
    }
  }

  async showStoryDetail() {
    this.#view.showStoryDetailLoading();
    try {
      const response = await getStoryById(this.#storyId);
      if (!response.story.lat && !response.story.lon) {
        this.#view.populateStoryDetail(response.story);
        return;
      }
      const story = await storyMapper(response.story);

      this.#view.populateStoryDetail(story);
    } catch (error) {
      console.error(error);
      this.#view.populateStoryDetailError(error.message);
    } finally {
      this.#view.hideStoryDetailLoading();
    }
  }

  // async notifyMe() {
  //   try {
  //     const response = await this.#apiModel.sendReportToMeViaNotification(this.#storyId);
  //     if (!response.ok) {
  //       console.error('notifyMe: response:', response);
  //       return;
  //     }
  //     console.log('notifyMe:', response.message);
  //   } catch (error) {
  //     console.error('notifyMe: error:', error);
  //   }
  // }
}
