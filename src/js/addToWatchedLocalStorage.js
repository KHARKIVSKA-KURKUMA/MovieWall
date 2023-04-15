function addLocalStorage(data) {
    const addToWatchedButton = document.querySelector('.add-to-watched-btn');
      let watchedMovies =
        JSON.parse(localStorage.getItem('Watched movies')) || [];
      const isWatched = watchedMovies.includes(data.id);
      if (isWatched) {
        addToWatchedButton.textContent = 'Remove from watched';
      } else {
        addToWatchedButton.textContent = 'Add to watched';
      }
      addToWatchedButton.addEventListener('click', onToWatchedButton);

      function onToWatchedButton(event) {
        let watchedMovies =
          JSON.parse(localStorage.getItem('Watched movies')) || [];
        const isWatched = watchedMovies.includes(data.id);
        if (!isWatched) {
          watchedMovies.push(data.id);
          event.target.textContent = 'Remove from watched';
        } else {
          const movieIndex = watchedMovies.indexOf(data.id);
          watchedMovies.splice(movieIndex, 1);
          event.target.textContent = 'Add to watched';
        }
        localStorage.setItem('Watched movies', JSON.stringify(watchedMovies));
}
}

export{addLocalStorage}

