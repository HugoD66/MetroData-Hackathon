export function setupScroll() {
    const scrollButton = document.querySelector('.accueil-button');
    if (scrollButton) {
        scrollButton.addEventListener('click', (e) => {
            e.preventDefault();
            const trendsSection = document.querySelector('#trends');
            trendsSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
}
