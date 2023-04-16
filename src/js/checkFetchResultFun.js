import { refs } from './refs';
import notAvailableResult from '../images/not-available-result.png';

function eventActions() {
  refs.homeGalleryList.innerHTML = '';
  refs.galleryBgImg.style = 'none';
  const text = refs.searchForm.querySelector('.search-notification');
  if (text) {
    text.remove();
  }
  const notification = refs.galleryBgImg.querySelector('.text-notification');
  if (notification) {
    notification.remove();
  }
}

function checkResultActions() {
  refs.galleryBgImg.style.height = '280px';
  refs.galleryBgImg.style.backgroundRepeat = 'no-repeat';
  refs.galleryBgImg.style.backgroundPosition = 'center';
  refs.galleryBgImg.style.backgroundImage = `url(${notAvailableResult})`;
  const notification = document.createElement('p');
  notification.textContent = 'OOPS! nothing found';
  refs.galleryBgImg.append(notification);
  notification.classList.add('text-notification');
  refs.searchForm.insertAdjacentHTML('beforeend', createNotification());
}

function createNotification() {
  return `<p class='search-notification'>Search result not successful. Enter the correct movie name.</p>`;
}

//  async function stopNotification() { setTimeout(await text.remove(), 1000); }
//   stopNotification();

export { eventActions, checkResultActions };
