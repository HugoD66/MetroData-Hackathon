export function setupAccordions() {
    const accordions = document.querySelectorAll('.accordion');
    accordions.forEach(accordion => {
        const header = accordion.querySelector('.accordion-header');
        header.addEventListener('click', () => {
            const isActive = accordion.classList.contains('active');

            accordions.forEach(acc => acc.classList.remove('active'));

            if (!isActive) {
                accordion.classList.add('active');
            }
        });
    });
}