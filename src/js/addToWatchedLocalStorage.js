function addLocalStorage(data) {
  const addToWatchedButton = document.querySelector('.add-to-watched-btn');
  let watchedMovies = JSON.parse(localStorage.getItem('Watched movies')) || [];
  const isWatched = watchedMovies.includes(data.id);
  let activeLang = localStorage.getItem('lang');

  if (isWatched) {
    console.log(activeLang);
    if (activeLang === 'uk') {
      addToWatchedButton.textContent = 'Прибрати з переглянутих';
    } else {
      addToWatchedButton.textContent = 'Remove from watched';
    }
  } else {
    if (activeLang === 'uk') {
      addToWatchedButton.textContent = 'Додати до переглянутих';
    } else {
      addToWatchedButton.textContent = 'Add to watched';
    }
  }
  addToWatchedButton.addEventListener('click', onToWatchedButton);

  function onToWatchedButton(event) {
    let watchedMovies =
      JSON.parse(localStorage.getItem('Watched movies')) || [];
    const isWatched = watchedMovies.includes(data.id);
    if (!isWatched) {
      watchedMovies.push(data.id);
      if (activeLang === 'uk') {
        event.target.textContent = 'Прибрати з переглянутих';
      } else {
        event.target.textContent = 'Remove from watched';
      }
    } else {
      const movieIndex = watchedMovies.indexOf(data.id);
      watchedMovies.splice(movieIndex, 1);
      if (activeLang === 'uk') {
        event.target.textContent = 'Додати до переглянутих';
      } else {
        event.target.textContent = 'Add to watched';
      }
    }
    localStorage.setItem('Watched movies', JSON.stringify(watchedMovies));
  }
}

export { addLocalStorage };
