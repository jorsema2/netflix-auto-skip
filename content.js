function clickNextEpisode() {
    const nextButton = document.querySelector('[data-uia="next-episode-seamless-button"]');
    if (nextButton) {
        nextButton.click();
        console.log('Clicked Next Episode button');
    }
}

const observer = new MutationObserver((mutations) => {
    for (let mutation of mutations) {
        if (mutation.type === 'childList') {
            clickNextEpisode();
        }
    }
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});
