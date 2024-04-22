function startTimer() {
    const duration = 300;
    let remainingTime = duration;
  document.body.style.backgroundColor = 'darkcyan';

    function updateTimer() {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        document.getElementById('timer').textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (remainingTime === 0) {
            document.body.style.backgroundColor = 'red';
        } else {
            remainingTime--;
            setTimeout(updateTimer, 1000);
        }
    }

    updateTimer();
}
