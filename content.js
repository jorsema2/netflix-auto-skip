function clickNextEpisode() {
    const nextButton = document.querySelector('[data-uia="next-episode-seamless-button"]');
    if (nextButton) {
        nextButton.click();
    }
}

setInterval(clickNextEpisode, 1000);
