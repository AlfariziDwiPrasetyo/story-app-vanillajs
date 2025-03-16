export function generateLoaderTemplate() {
  return `
    <div class="loader"></div>
  `;
}

export function generateLoaderAbsoluteTemplate() {
  return `
    <div class="loader loader-absolute"></div>
  `;
}

export function generateUnauthenticatedNavigationListTemplate() {
  return `
    <li id="push-notification-tools" class="push-notification-tools"></li>
    <li><a id="login-button" href="#/login"><button class="btn-ghost">Login</button></a></li>
    <li><a id="register-button" href="#/register"><button class="btn">Register</button></a></li>
  `;
}

export function generateAuthenticatedNavigationListTemplate() {
  return `
    <li id="push-notification-tools" class="push-notification-tools"></li>
    <li><a id="new-report-button" href="#/new"><button class="btn-ghost">Buat Cerita<i class="fas fa-plus"></i></button></a></li>
    <li><a id="logout-button" class="logout-button" href="#/logout"><button class="btn"><i class="fas fa-sign-out-alt"></i> Logout</button></a></li>
  `;
}

export function generateMainNavigationListTemplate() {
  return `
    <li><a id="report-list-button" class="report-list-button" href="#/">Daftar Laporan</a></li>
    <li><a id="bookmark-button" class="bookmark-button" href="#/bookmark">Laporan Tersimpan</a></li>
  `;
}

export function generateStoryItemTemplate({
  createdAt,
  description,
  id,
  lat,
  lon,
  name,
  photoUrl,
}) {
  return `
  <div id="${id}" class="story-item">
      <a href="#/story/${id}">
        <img src="${photoUrl}" alt="Story by ${name}" class="story-item__image"/>
        <div class="story-item__content">
          <h3 class="story-item__name">${name}</h3>
          <p class="story-item__description">${description}</p>
          <div class="story-item__meta">
            <span class="story-item__date">${new Date(createdAt).toLocaleDateString()}</span>
            <span class="story-item__location">📍 ${lat}, ${lon}</span>
          </div>
        </div>
      </a>
    </div>
  `;
}

export function generateStoriesListErrorTemplate(message) {
  return `
    <div id="story-list-error" class="story-list__error">
      <h2>Terjadi kesalahan pengambilan cerita</h2>
      <p>${message ? message : 'Gunakan jaringan lain atau laporkan error ini.'}</p>
    </div>
  `;
}

export function generateStoriesListEmptyTemplate() {
  return `
    <div id="story-list-empty" class="story-list__empty">
      <h2>Tidak ada cerita yang tersedia</h2>
      <p>Saat ini, tidak ada cerita yang bisa ditampilkan.</p>
    </div>
  `;
}

export function generateStoryDetailTemplate({
  createdAt,
  description,
  id,
  lat,
  lon,
  name,
  photoUrl,
}) {
  return `
    <div class="story-detail">
      <div class="story-detail__header">
        <img src="${photoUrl}" alt="Story by ${name}" class="story-detail__image">
        <h2 class="story-detail__title">${name}</h2>
        <p class="story-detail__date">${new Date(createdAt).toLocaleString()}</p>
      </div>
      <div class="story-detail__content">
        <p class="story-detail__description">${description}</p>
        <div class="story-detail__meta">
          <p><strong>ID:</strong> ${id}</p>
          <p><strong>Location:</strong> ${lat}, ${lon}</p>
        </div>
      </div>
    </div>
  `;
}
