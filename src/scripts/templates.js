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
