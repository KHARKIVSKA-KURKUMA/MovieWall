function addQueueLocalStorage(data) {
    const addToQueueButton = document.querySelector('.add-to-queue-btn');
      let queueMovies =
        JSON.parse(localStorage.getItem('Queue movies')) || [];
      const isQueue = queueMovies.includes(data.id);
      if (isQueue) {
        addToQueueButton.textContent = 'Remove from queue';
      } else {
        addToQueueButton.textContent = 'Add to queue';
      }
      addToQueueButton.addEventListener('click', onToQueueButton);

      function onToQueueButton(event) {
        let queueMovies =
          JSON.parse(localStorage.getItem('Queue movies')) || [];
        const isQueue = queueMovies.includes(data.id);
        if (!isQueue) {
          queueMovies.push(data.id);
          event.target.textContent = 'Remove from queue';
        } else {
          const movieIndex = queueMovies.indexOf(data.id);
          queueMovies.splice(movieIndex, 1);
          event.target.textContent = 'Add to queue';
        }
        localStorage.setItem('Queue movies', JSON.stringify(queueMovies));
}
}

export{addQueueLocalStorage}
