function addQueueLocalStorage(data) {
  let activeLang = localStorage.getItem('lang');
  const addToQueueButton = document.querySelector('.add-to-queue-btn');
  let queueMovies = JSON.parse(localStorage.getItem('Queue movies')) || [];
  const isQueue = queueMovies.includes(data.id);
  if (isQueue) {
    if (activeLang === 'uk') {
      addToQueueButton.textContent = 'Прибрати з черги';
    } else {
      addToQueueButton.textContent = 'Remove from queue';
    }
  } else {
    if (activeLang === 'uk') {
      addToQueueButton.textContent = 'Додати до черги';
    } else {
      addToQueueButton.textContent = 'Add to queue';
    }
  }
  addToQueueButton.addEventListener('click', onToQueueButton);
  function onToQueueButton(event) {
    let queueMovies = JSON.parse(localStorage.getItem('Queue movies')) || [];
    const isQueue = queueMovies.includes(data.id);
    if (!isQueue) {
      queueMovies.push(data.id);
      if (activeLang === 'uk') {
        event.target.textContent = 'Прибрати з черги';
      } else {
        event.target.textContent = 'Remove from queue';
      }
    } else {
      const movieIndex = queueMovies.indexOf(data.id);
      queueMovies.splice(movieIndex, 1);
      if (activeLang === 'uk') {
        event.target.textContent = 'Додати до черги';
      } else {
        event.target.textContent = 'Add to queue';
      }
    }
    localStorage.setItem('Queue movies', JSON.stringify(queueMovies));
  }
}

export { addQueueLocalStorage };
