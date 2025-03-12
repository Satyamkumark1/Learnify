function updateProgress(button, increment) {
    const course = button.parentElement;
    const progressBar = course.querySelector('.progress-bar-fill');
    const congratulations = course.querySelector('.congratulations');
    const tick = course.querySelector('.tick');
    let currentProgress = parseInt(progressBar.style.width);
    let newProgress = Math.min(currentProgress + increment, 100);
    progressBar.style.width = newProgress + '%';
    progressBar.textContent = newProgress + '%';

    if (newProgress === 100) {
        congratulations.style.display = 'block';
        tick.classList.add('show');
        setTimeout(() => congratulations.classList.add('show'), 10);
        checkAllComplete();
    }
}

function checkAllComplete() {
    const progressBars = document.querySelectorAll('.progress-bar-fill');
    const allComplete = [...progressBars].every(bar => parseInt(bar.style.width) === 100);
    const allCompleteMsg = document.getElementById('allComplete');
    if (allComplete) {
        allCompleteMsg.style.display = 'block';
        setTimeout(() => allCompleteMsg.classList.add('show'), 10);
        startConfetti();
    }
}

function startConfetti() {
    const confettiContainer = document.getElementById('confettiContainer');
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti-piece');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confetti.style.backgroundColor = 'hsl(' + Math.random() * 360 + ', 100%, 50%)';
        confettiContainer.appendChild(confetti);
    }
    setTimeout(() => {
        confettiContainer.innerHTML = '';
    }, 5000); // Clear confetti after 5 seconds
}