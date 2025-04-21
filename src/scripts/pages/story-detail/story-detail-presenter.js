import { getStoryById } from '../../data/api';
import { storyMapper } from '../../data/api-mapper';

export default class StoryDetailPresenter {
  #storyId;
  #view;
  #apiModel;
  #dbModel;

  constructor(storyId, { view, apiModel, dbModel }) {
    this.#storyId = storyId;
    this.#view = view;
    this.#apiModel = apiModel;
    this.#dbModel = dbModel;
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

  async saveStory() {
    try {
      const report = await this.#apiModel.getReportById(this.#storyId);
      await this.#dbModel.putReport(report.data);
      this.#view.saveToBookmarkSuccessfully('Success to save to bookmark');
    } catch (error) {
      console.error('saveReport: error:', error);
      this.#view.saveToBookmarkFailed(error.message);
    }
  }

  async showSaveButton() {
    if (await this.#isReportSaved()) {
      this.#view.renderRemoveButton();
      return;
    }

    this.#view.renderSaveButton();
  }

  async #isReportSaved() {
    return !!(await this.#dbModel.getStoryById(this.#storyId));
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
