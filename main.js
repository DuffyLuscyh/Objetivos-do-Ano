const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  const progressBar = card.querySelector('.progress-bar');
  const progressInfo = card.querySelector('.info span:first-child');

  const days = parseInt(progressInfo.innerText.split(' ')[0]);
  const hours = parseInt(progressInfo.innerText.split(' ')[2]);
  const minutes = parseInt(progressInfo.innerText.split(' ')[4]);

  const totalSeconds = (days * 24 * 60 * 60) + (hours * 60 * 60) + (minutes * 60);

  const updateProgressBar = () => {
    const now = new Date();
    const then = new Date(now.getFullYear(), 0, 1);
    const secondsElapsed = Math.floor((now - then) / 1000);
    const percentageComplete = (secondsElapsed / totalSeconds) * 100;

    progressBar.style.width = `${percentageComplete}%`;

    if (percentageComplete === 100) {
      clearInterval(intervalId);
    }
  };

  let intervalId = setInterval(updateProgressBar, 1000);
});
